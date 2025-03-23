import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const mona_Sans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
})

export const metadata: Metadata = {
  title: "Dr.Interview",
  description: "An AI-Powred platform to prepare mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mona_Sans.variable} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
