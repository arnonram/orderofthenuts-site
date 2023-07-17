import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order of the Nuts",
  description: "Home of the Order of the Nuts",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-5xl font-bold text-white">Order of the Nuts</h1>
        </Link>
        <p className="text-slate-300">
          Welcome to the home of the Order of the Nuts
        </p>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <h3 className="italic">Deved by -arnon, 2023</h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-4xl px-6">
          <Navbar />
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
