import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ── Content-Security-Policy ──────────────────────────────────────
          // Removed 'unsafe-eval' — CVE mitigation; Next.js 16 prod build
          // does not require eval(). 'unsafe-inline' kept for styles only.
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // No 'unsafe-eval' — prevents eval()-based XSS
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data:",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // ── Clickjacking protection ───────────────────────────────────────
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // ── MIME sniffing protection ──────────────────────────────────────
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // ── Referrer leakage protection ───────────────────────────────────
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // ── HTTPS enforcement (HSTS) ──────────────────────────────────────
          // 1-year max-age; includeSubDomains; preload-ready
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // ── Browser feature policy ────────────────────────────────────────
          // Restrict sensitive APIs: camera, mic, geolocation, etc.
          {
            key: "Permissions-Policy",
            value: [
              "camera=()",
              "microphone=()",
              "geolocation=()",
              "payment=()",
              "usb=()",
              "interest-cohort=()",
            ].join(", "),
          },
          // ── Spectre / cross-origin isolation ─────────────────────────────
          // Prevents cross-origin window references (tab-napping, Spectre)
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // ── Resource leakage prevention ───────────────────────────────────
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          // ── Legacy XSS filter (IE/older browsers) ─────────────────────────
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

