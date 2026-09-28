"use server"

import { site } from "@/lib/content"
import {
  CONTACT_MAX_LENGTHS as MAX_LENGTHS,
  CONTACT_MIN_MESSAGE_LENGTH,
  type ContactFieldErrors,
  type ContactState,
} from "@/lib/contact"

// Deliberately loose: the goal is to catch typos, not to police valid
// addresses. Anything stricter rejects real email.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readField(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
  }

  // Hidden field real users never fill in. Bots that do get a success
  // response so they have nothing to tune against.
  if (readField(formData, "company") !== "") {
    return {
      status: "success",
      message: "Your message is on its way.",
    }
  }

  const errors: ContactFieldErrors = {}

  if (values.name.length === 0) {
    errors.name = "Please enter your name."
  } else if (values.name.length > MAX_LENGTHS.name) {
    errors.name = `Please keep this under ${MAX_LENGTHS.name} characters.`
  }

  if (values.email.length === 0) {
    errors.email = "Please enter your email so I can reply."
  } else if (values.email.length > MAX_LENGTHS.email) {
    errors.email = "That email address is too long."
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "That doesn't look like a valid email address."
  }

  if (values.message.length < CONTACT_MIN_MESSAGE_LENGTH) {
    errors.message = `Please write at least ${CONTACT_MIN_MESSAGE_LENGTH} characters.`
  } else if (values.message.length > MAX_LENGTHS.message) {
    errors.message = `Please keep this under ${MAX_LENGTHS.message} characters.`
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    }
  }

  const apiKey = process.env.CONTACT_EMAIL_API_KEY

  if (!apiKey) {
    console.error("[contact] CONTACT_EMAIL_API_KEY is not set")
    return {
      status: "error",
      message: `The form isn't set up yet. Please email me at ${site.email}.`,
      values,
    }
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: site.email,
        reply_to: values.email,
        subject: `Portfolio message from ${values.name}`,
        text: `From: ${values.name} <${values.email}>\n\n${values.message}`,
      }),
    })

    if (!res.ok) {
      console.error("[contact] Resend error:", res.status, await res.text())
      return {
        status: "error",
        message: `Something went wrong sending that. Please email me at ${site.email}.`,
        values,
      }
    }
  } catch (error) {
    console.error("[contact] network error:", error)
    return {
      status: "error",
      message: `Something went wrong sending that. Please email me at ${site.email}.`,
      values,
    }
  }

  return {
    status: "success",
    message: "Thanks, your message is on its way!",
  }

  //
  // Until that exists, fail loudly in production rather than telling someone
  // their message was sent when it was not.
  if (process.env.NODE_ENV === "production") {
    return {
      status: "error",
      message:
        "The contact form isn't wired up to send yet — please email me directly.",
      values,
    }
  }

  console.log("[contact] submission received (not sent):", values)

  return {
    status: "success",
    message: "Thanks — your message is on its way. I'll reply soon.",
  }
}
