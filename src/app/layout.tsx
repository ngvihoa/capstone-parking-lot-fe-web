import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import AppContainer from "@/components/AppContainer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PakiSlot | HomePage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} text-neutral-900 bg-white sm:bg-gray-100`}
      >
        <AppContainer>{children}</AppContainer>
        <Toaster />
      </body>
    </html>
  );
}
