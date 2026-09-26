import type { Metadata, Viewport } from "next"
import { Geist_Mono, IBM_Plex_Sans, Nunito_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { site } from "@/lib/content"

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
      // Next 16 no longer overrides `scroll-behavior` during navigation unless
      // this attribute is present, which would make route changes animate a
      // long smooth scroll instead of jumping to the top.
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        fontSans.variable,
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
