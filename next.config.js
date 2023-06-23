/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: config => {//workaround for docker on windows https://stackoverflow.com/questions/54126848/why-nextjs-using-docker-container-did-not-reload-after-changed-code-for-dev-envi
      config.watchOptions = {
        poll: 800,
        aggregateTimeout: 300,
      }
      return config
    },
}

module.exports = nextConfig
