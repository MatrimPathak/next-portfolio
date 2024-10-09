/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "links.matrimpathak.com",
			},
		],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
