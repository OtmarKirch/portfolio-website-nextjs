import type { Metadata } from "next";
import { Inter, Roboto, Mulish } from "next/font/google";
import "./globals.css";
import Hero from "@/components/sections/hero";
import FooterComponent from "@/components/sections/footer";



// const inter = Inter({ 
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Otmar Kirchgäßner",
  description: "Portfolio of Otmar Kirchgäßner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <div
          className={`${mulish.variable} font-sans min-h-screen bg-gradient-to-tr from-slate-900 to-slate-500`}
        >
          <Hero />
          {children}
          <FooterComponent />

        </div>
      </body>
    </html>
  );
}
