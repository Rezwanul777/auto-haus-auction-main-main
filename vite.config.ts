
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// export default defineConfig(({ mode }) => ({
//   // Base public path - this should work for both dev and preview
//   base: '/',
  
//   // Development server configuration
//   server: {
//     port: 8000,
//     strictPort: true, // Fail if port is in use
//     host: true, // Listen on all addresses
//   },
  
//   // Preview server configuration
//   preview: {
//     port: 8000,
//     strictPort: true,
//     host: true,
//   },
  
//   // Build configuration
//   build: {
//     sourcemap: true,
//     chunkSizeWarningLimit: 1000,
//     // Ensure clean URLs work
//     assetsDir: 'assets',
//     rollupOptions: {
//       output: {
//         // Split vendor chunks for better caching
//         manualChunks: {
//           vendor: ['react', 'react-dom', 'framer-motion'],
//           // Add other common dependencies here if needed
//         },
//       },
//     },
//   },
  
//   // Plugins configuration
//   plugins: [
//     react(),
//     mode === 'development' &&
//     componentTagger(),
//   ].filter(Boolean),
  
//   // Path aliases
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Base public path - this should work for both dev and preview
  base: '/',
 
  // Development server configuration
  server: {
    port: 3000, // Changed from 8000 to 3000
    strictPort: false, // Changed to false to allow fallback to next available port
    host: true, // Listen on all addresses
  },
 
  // Preview server configuration
  preview: {
    port: 3000, // Changed from 8000 to 3000
    strictPort: false, // Changed to false to allow fallback
    host: true,
  },
 
  // Build configuration
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    // Ensure clean URLs work
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          // Add other common dependencies here if needed
        },
      },
    },
  },
 
  // Plugins configuration
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
 
  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));