import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: ["node 18"],
      autoExternal: true,
      dts: true,
    },
    {
      format: "cjs",
      syntax: ["node 18"],
      autoExternal: true,
    },
  ],
});
