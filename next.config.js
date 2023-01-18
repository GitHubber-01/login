/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URI_MONGO: process.env.URI_MONGO,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    URL: process.env.URL,
    JWT_SECRET: process.env.JWT_SECRET
  }
}

module.exports = nextConfig
