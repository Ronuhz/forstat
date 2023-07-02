/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ['media.fortniteapi.io'],
	},
}

module.exports = nextConfig
