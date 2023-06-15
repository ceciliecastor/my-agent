import Footer from "./component/Footer";
import Navbar from "./component/navbar/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={roboto.className}>
        {/* <Header /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
