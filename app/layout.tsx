import Header from "./component/header";
import Navbar from "./component/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Din Mægler",
  description: "Vi har fulgt danskerne hjem i snart 4 årtier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
