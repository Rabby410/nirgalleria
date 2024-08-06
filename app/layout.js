import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import BackToTop from "./components/common/backToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nir Galleria",
  description: "Nir Galleria: Where Artistry Meets Style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <BackToTop/>
        <Footer/>
      </body>
    </html>
  );
}