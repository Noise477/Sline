import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SLINE | Integrated Site Solutions",
    template: "%s | SLINE",
  },
  description:
    "SLINE delivers asbestos removal, demolition, earthworks, public drainage, private drainage & plumbing and All-in-One site services across Auckland and beyond.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}