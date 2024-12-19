import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/components/AosProvider/AosProvider";

export const metadata: Metadata = {
  title: {
    default: "Izet Delibasic | Web Developer | Software Engineering Student",
    template:
      "%s - Izet Delibasic | Web Developer | Software Engineering Student",
  },
  description:
    "Izet Delibašić, a software engineering student with the ambition to become a full-stack developer.",
  openGraph: {
    title: {
      default: "Izet Delibasic | Web Developer | Software Engineering Student",
      template:
        "%s - Izet Delibasic | Web Developer | Software Engineering Student",
    },
    description:
      "Izet Delibašić, a software engineering student with the ambition to become a full-stack developer.",

    images: [
      {
        url: "/images/profileImage.jpg",
        width: 1200,
        height: 630,
        alt: "Izet Delibasic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/velezWallpaper.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
