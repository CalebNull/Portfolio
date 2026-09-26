import { ImageResponse } from "next/og"

import { site } from "@/lib/content"

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// ImageResponse only supports flexbox and a subset of CSS — no grid.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#1c1917",
        color: "#fafaf9",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
        {site.name}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 12,
          fontSize: 40,
          color: "#a8a29e",
        }}
      >
        {site.role}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 40,
          fontSize: 28,
          color: "#78716c",
          maxWidth: 900,
        }}
      >
        {site.tagline}
      </div>
    </div>,
    size
  )
}
