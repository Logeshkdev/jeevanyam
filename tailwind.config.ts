import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { fontFamily: { serif: ["Georgia", "serif"] }, colors: { wine: "#641f2b", gold: "#c89b4b", cream: "#fbf6ed", ink: "#322d2c" } } }, plugins: [] } satisfies Config;
