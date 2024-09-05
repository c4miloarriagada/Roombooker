/** @type {import('next').NextConfig} */
import initDatabase from './src/db/index.js'

initDatabase()

const nextConfig = {
  reactStrictMode: true
}

export default nextConfig
