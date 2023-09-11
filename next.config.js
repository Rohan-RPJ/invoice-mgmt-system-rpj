/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
        // loader: "url-loader",
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /pdfjs-dist\/build\/pdf\.worker\.js$/,
        type: "asset/resource",
        generator: {
          filename: "static/chunks/[name].[hash][ext]",
        },
      }
    );

    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker",
          },
        },
      ],
    });

    config.resolve.fallback = { fs: false };

    return config;
  },
  env: {
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
  },
  images: {
    domains: ["localhost", "lh3.googleusercontent.com", "drive.google.com"],
    path: "/_next/image",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: '/account123/**',
      },
      // {
      //   protocol: "https",
      //   hostname: "facebook.com",
      //   port: "",
      // },
      // {
      //   protocol: "https",
      //   hostname: "drive.google.com",
      //   port: "",
      // },
      // {
      //   protocol: "https",
      //   hostname: "fb-clone-project.vercel.app",
      //   port: "",
      // },
      // {
      //   protocol: "https",
      //   hostname: "youtube.com",
      //   port: "",
      // },
    ],
  },
};

module.exports = nextConfig;
