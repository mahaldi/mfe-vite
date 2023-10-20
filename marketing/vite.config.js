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
const PORT = '8081';
const federationConfig = {
  name: 'marketing',
  shared: ["react", "react-router-dom"],
  filename: "remoteEntry.js",
  exposes: {
    './Marketing': './src/bootstrap.jsx'
  }
}
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    // dev specific config
    
    config.plugins.push(federation({
      ...federationConfig
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

    config.plugins.push(federation({
      ...federationConfig
    }))
    return {
      mode: 'production',
      // base: '/marketing/latest/',
      ...config
    }
  }
})