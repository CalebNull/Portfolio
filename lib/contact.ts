/**
 * Shared shape for the contact form's action state.
 *
 * This lives outside `app/actions.ts` on purpose: every export of a
 * `"use server"` module is turned into a server function reference, so a
 * plain object exported from there would not survive the trip to the client.
 */

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "message", string>
>

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: ContactFieldErrors
  /** Echoed back so the form repopulates after a failed submit. */
  values?: { name: string; email: string; message: string }
}

export const initialContactState: ContactState = { status: "idle" }

export const CONTACT_MAX_LENGTHS = {
  name: 100,
  email: 254,
  message: 4000,
} as const

export const CONTACT_MIN_MESSAGE_LENGTH = 10
