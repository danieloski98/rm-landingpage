import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Landingpagelayout from "@/components/shared/landingpagelayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RHEMA Mena | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <Landingpagelayout>{children}</Landingpagelayout>
      </body>
    </html>
  );
}
