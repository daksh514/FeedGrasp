import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://feed-grasp.vercel.app'),
  title: {
    default: "FeedGrasp - Easy Feedbacks",
    template: "%s - FeedGrasp"
  },
  description: "Collect feedbacks from anyone easily and instantly using feedgrasp.",
  twitter: {
    card: "summary_large_image",
    
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">

      <body className={inter.className}>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
