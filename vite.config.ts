import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import basicSsl from "@vitejs/plugin-basic-ssl";

type ViteConfigInput = {
  mode: string;
  command: string;
  ssrBuild: boolean;
};

export default (args: ViteConfigInput) => {
  const { mode } = args;
  const generateScopedName = mode === "production" ? "[hash:base64:2]" : "[name]_[local]";

  return defineConfig({
    css: {
      modules: {
        generateScopedName,
      },
    },
    plugins: [basicSsl(), react(), tsconfigPaths()],
    server: {
      port: 3000,
    },
  });
};
