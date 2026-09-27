

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "message", string>
>

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: ContactFieldErrors
  values?: { name: string; email: string; message: string }
}

export const initialContactState: ContactState = { status: "idle" }

export const CONTACT_MAX_LENGTHS = {
  name: 100,
  email: 254,
  message: 4000,
} as const

export const CONTACT_MIN_MESSAGE_LENGTH = 10
