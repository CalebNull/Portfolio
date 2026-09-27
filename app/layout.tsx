import type { Metadata, Viewport } from "next"
import { Geist_Mono, IBM_Plex_Sans, Nunito_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { site } from "@/lib/content"
import { ReactLenis } from "lenis/react"

const fontHeading = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontSans = IBM_Plex_Sans({
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
      // Development only: ignore the OS reduced-motion preference so the
      // reveal animations are visible on localhost. Inlined at build time,
      // so production output never carries it.
      data-motion={process.env.NODE_ENV === "development" ? "force" : undefined}
      className={cn(
        "antialiased",
        fontSans.variable,
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body className="font-sans">
        {/* Reveal targets start at opacity 0 for the observer to animate in.
            Without JS there is no observer, so un-hide them outright. */}
        <noscript>
          <style>{`[data-reveal],[data-reveal-stagger]>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ReactLenis root options={{ anchors: { offset: -88 } }}>
          <ThemeProvider>{children}</ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  )
}
