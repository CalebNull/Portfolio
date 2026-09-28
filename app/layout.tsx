import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { site } from "@/lib/content"
import { ReactLenis } from "lenis/react"

const fontHeading = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    site.name,
    site.role,
    "portfolio",
    "TypeScript",
    "React",
    "Next.js",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(1 0 0)" },
    {
      media: "(prefers-color-scheme: dark)",
      color: "oklch(0.147 0.004 49.25)",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      data-motion={process.env.NODE_ENV === "development" ? "force" : undefined}
      className={cn(
        "antialiased",
        fontSans.variable,
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body className="font-sans">
        <noscript>
          <style>{`[data-reveal],[data-reveal-stagger]>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ReactLenis
          root
          options={{
            anchors: { offset: -88 },
            respectReducedMotion: process.env.NODE_ENV !== "development",
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  )
}
