import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/ords': {
        target: 'http://localhost:8181', // Clean URL format
        changeOrigin: true, // Essential for ORDS to accept the Host header
        secure: false, // Useful if ORDS uses a self-signed HTTPS certificate
        rewrite: (path) => path, // Ensures the path is passed exactly as /ords/...
        configure: (proxy, _options) => {
          // Debugging hooks to monitor ORDS API traffic
          proxy.on('error', (err, _req, _res) => {
            console.error('Proxy Error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            // Fusabase often requires specific origins or standard REST headers
            proxyReq.setHeader('Origin', 'http://localhost:8181');
            console.log(`[Proxy] ${req.method} ${req.url}`);
          });
        }
      }
    },
    watch: {
      usePolling: true,
      ignored: ['**/*.sql']
    }
  }
});
