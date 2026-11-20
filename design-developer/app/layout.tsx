import type { Metadata, Viewport } from "next";
// Self-hosted Manrope (variable, 200–800) — no build-time call to Google Fonts.
import "@fontsource-variable/manrope";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://design-developer.com"),
  title: "Design Developer | AI Digital Employees, Marketing & Agency Services",
  description:
    "Custom AI digital employees, marketing, and agency services that run your business's busywork, so you can lead.",
  openGraph: {
    title: "Design Developer | Hire a team that never clocks out.",
    description: "Custom AI digital employees, marketing, and agency services for business owners.",
    url: "https://design-developer.com",
    siteName: "Design Developer",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
