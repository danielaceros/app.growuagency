/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        OPENAI_KEY:process.env.OPENAI_KEY,
        YOUTUBE_KEY:process.env.YOUTUBE_KEY
    }
};

export default nextConfig;
