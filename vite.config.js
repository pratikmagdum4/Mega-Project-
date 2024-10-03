import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Add the react() plugin here
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
