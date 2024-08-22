import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import BackToTop from "./components/common/backToTop";
import Loader from "./components/common/loader";
import CartModal from "@/app/components/modals/cartModal";
import { CartProvider } from "./context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nir Galleria",
  description: "Nir Galleria: Where Artistry Meets Style",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={inter.className}>
          <Loader />
          <Header />
          {children}
          <CartModal />
          <BackToTop />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
