import type { Metadata } from "next";
import "./globals.css";

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
        <>{children}</>
      </body>
    </html>
  );
}
