import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cherry Collectables | Release Calendar",
  description: "Weekly trading card release calendar powered by Waxstat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
