/** @type {import('next').NextConfig} */
import initDatabase from './src/db/index.js'

initDatabase()

const nextConfig = {
  images: { domains: ['www.kayak.cl'] },
  formats: ['image/avif', 'image/webp'],
  reactStrictMode: true
}

export default nextConfig
