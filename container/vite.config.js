import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
const config = {
  plugins: [
    react()
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
}
const PORT = '8080';
const federationConfig = {
  name: 'container',
  shared: ["react", "react-router-dom"],
}
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    // dev specific config
    
    config.plugins.push(federation({
      ...federationConfig,
      remotes: {
        marketing: 'http://localhost:4173/assets/remoteEntry.js', // cant use 8081 port that define on marketing vite config due to need to build and preview first and use /assest due to need to build first: https://github.com/originjs/vite-plugin-federation/issues/281
        dashboard: 'http://localhost:4174/assets/remoteEntry.js'
      }
    }))
    return {
      mode: 'development',
      base: `http://localhost:${PORT}/`,
      server: {
        port: PORT
      },
      ...config
    }
  } else {
    // command === 'build'
    const env = loadEnv(mode, process.cwd(), ''); // eslint-disable-line
    // const domain = env.PRODUCTION_DOMAIN;

    config.plugins.push(federation({
      ...federationConfig,
      remotes: {
        // marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        marketing: 'http://localhost:4173/assets/remoteEntry.js',
        dashboard: 'http://localhost:4174/assets/remoteEntry.js'
      }
    }))
    return {
      mode: 'production',
      // base: '/container/latest/',
      ...config
    }
  }
})
