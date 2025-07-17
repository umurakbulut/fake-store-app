import { Montserrat } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/organisms/Header";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"} className={montserrat.className}>
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
