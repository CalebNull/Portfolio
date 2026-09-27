"use client"

import * as React from "react"
import { useActionState } from "react"
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { submitContact } from "@/app/actions"
import {
  CONTACT_MAX_LENGTHS,
  CONTACT_MIN_MESSAGE_LENGTH,
  initialContactState,
} from "@/lib/contact"

const fieldClasses =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"

// Matches the monospaced labels used for section headings and skill groups.
const labelClasses =
  "mb-2 block font-mono text-xs tracking-widest text-muted-foreground uppercase"

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) {
    return null
  }

  return (
    <p id={id} className="mt-1.5 text-xs text-destructive">
      {children}
    </p>
  )
}

function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialContactState
  )
  const formRef = React.useRef<HTMLFormElement>(null)

  // Clear the fields once a message actually goes through.
  React.useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form
      ref={formRef}
      action={formAction}
      data-reveal-stagger
      className="grid gap-5"
    >
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={CONTACT_MAX_LENGTHS.name}
          autoComplete="name"
          defaultValue={state.values?.name}
          aria-invalid={state.errors?.name ? true : undefined}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          className={fieldClasses}
        />
        <FieldError id="name-error">{state.errors?.name}</FieldError>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={CONTACT_MAX_LENGTHS.email}
          autoComplete="email"
          defaultValue={state.values?.email}
          aria-invalid={state.errors?.email ? true : undefined}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
          className={fieldClasses}
        />
        <FieldError id="email-error">{state.errors?.email}</FieldError>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={CONTACT_MIN_MESSAGE_LENGTH}
          maxLength={CONTACT_MAX_LENGTHS.message}
          defaultValue={state.values?.message}
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={cn(fieldClasses, "resize-y")}
        />
        <FieldError id="message-error">{state.errors?.message}</FieldError>
      </div>

      {/* Honeypot: hidden from users and assistive tech, tempting to bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="lg" disabled={isPending}>
          <PaperPlaneTilt className="size-4" />
          {isPending ? "Sending…" : "Send message"}
        </Button>

        {/* Announced to screen readers as soon as the action returns. */}
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "text-sm",
            state.status === "error" && "text-destructive",
            state.status === "success" && "text-muted-foreground"
          )}
        >
          {state.message}
        </p>
      </div>
    </form>
  )
}

export { ContactForm }
