import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const siteTitle = 'Ross Kmet Dev Portfolio'
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ross Kmet's Developer Portfolio",
  description: "Excellent Software, You Like It!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <div className="min-h-screen bg-transparent overflow-hidden">
              <div className="max-w-7xl mx-auto p-5">
                <Navbar />
                  {children}
                <Footer />
              </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
