import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Companion",
  description: "Your centralized university portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <AccessibilityProvider>
          <div className="flex min-h-screen relative">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 transition-all duration-300">
              {children}
            </main>
          </div>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
