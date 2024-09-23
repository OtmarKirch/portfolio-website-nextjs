import type { Metadata } from "next";
import { Inter, Roboto, Mulish } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../components/navigation";
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
  title: "Create Next App",
  description: "Generated by create next app",
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
          {children}
          <FooterComponent />
          
        </div>
      </body>
    </html>
  );
}
