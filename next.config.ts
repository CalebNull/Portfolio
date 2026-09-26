import { fileURLToPath } from "node:url"
import path from "node:path"

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the project root. A stray lock file in a parent directory (e.g.
    // C:\Users\Caleb\package-lock.json) otherwise makes Turbopack guess a
    // root above the repo and warn on every build.
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
}

export default nextConfig
