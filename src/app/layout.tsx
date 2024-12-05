import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Provider from "@/provider/provider";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Wallet",
  description: "Your Personal Web3 Wallet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased bg-background`}>
        <Provider>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow container mx-auto px-4 md:px-8">
              {children}
            </main>
            <Toaster />
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
