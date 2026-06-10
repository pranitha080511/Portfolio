import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased text-lg overflow-x-hidden bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
