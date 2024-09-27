import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Hero from "@/components/sections/hero";
import FooterComponent from "@/components/sections/footer";

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
          className={"min-h-screen bg-gradient-to-tr from-slate-900 to-slate-500"}
        >
          <Hero />
          {children}
          <FooterComponent />

        </div>
      </body>
    </html>
  );
}
