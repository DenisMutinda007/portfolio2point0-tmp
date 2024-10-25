"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/Footer";
import MobileNavBar from "@/components/ui/MobileNavBar";
import NavBar from "@/components/ui/NavBar";
import { Poppins } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import ServerLayout from "./serverLayout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileShow, setmobileShow] = useState(false);

  const onHamClick = () => {
    if (!mobileShow) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setmobileShow(!mobileShow);
  };

  return (
    <ServerLayout>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col items-center justify-between ">
              <header className="w-full sticky top-0 left-0 p-4 bg-background text-foreground border-b-2 border-foreground z-50">
                <NavBar onHamClick={onHamClick} />
                {mobileShow && <MobileNavBar onHamClick={onHamClick} />}
              </header>
              <div className="bg-background min-h-screen w-full" id="#">
                {children}
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ServerLayout>
  );
}
