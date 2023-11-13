import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContextProvider from "@/components/ContextProvider";
// import { Poppins } from "@next/font/google";
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ["400", "500", "600", "700", "800", "900"]
// })

export const metadata = {
  title: "Ecommerce App",
  description: "Strapi + Stripe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1400px] mx-auto">
          <ContextProvider>
            <Navbar />
            {children}
            <Footer />
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
