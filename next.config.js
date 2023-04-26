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

    return config;
  },
  env: {
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
  },
};

module.exports = nextConfig;
