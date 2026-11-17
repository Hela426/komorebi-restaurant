
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Komorebi — Japanese Restaurant",
  description:
    "Komorebi is a Japanese restaurant concept inspired by tradition, nature and quiet hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
