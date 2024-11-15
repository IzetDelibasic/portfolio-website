import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/components/AosProvider/AosProvider";

export const metadata: Metadata = {
  title: "Izet Delibašić | Web Developer & Software Engineering Student",
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
