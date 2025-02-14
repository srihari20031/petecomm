import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
// import Footer from "./_components/Footer";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });


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
      <body className={`bg-bg-color  ${poppins.className}`}>
        
        <Navbar />
        {children}
        </body>
        {/* <Footer currentYearProp="2024" /> */}
    </html>
  );
}
