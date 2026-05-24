import type { Metadata, Viewport } from "next";
import BootstrapScripts from "@/components/BootstrapScripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://yaarwinindian.com"),
  authors: [{ name: "Yaarwin" }],
  icons: {
    icon: [
      { url: "https://yaarwinindian.com/favico.ico", type: "image/x-icon" },
      {
        url: "https://yaarwinindian.com/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://yaarwinindian.com/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://yaarwinindian.com/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#22c55e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href="/stylee.css?1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        {children}
        <BootstrapScripts />
      </body>
    </html>
  );
}
