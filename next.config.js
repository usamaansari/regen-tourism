/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: "pk.eyJ1IjoidXNhbWExMDEiLCJhIjoiY2w5cDhpb2w1MHBvYjNycXB2Z2YxbmM0NyJ9.tvfJEg81uGStmn-FvZ15bQ"
  },

  swcMinify: true,
}

module.exports = nextConfig
