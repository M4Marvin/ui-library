import './src/env.js';
import nextMDX from '@next/mdx';

const withMDX = nextMDX({
    extension: /\.mdx$/,
});

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
};

export default withMDX(config);