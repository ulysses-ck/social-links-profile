import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Links Profile",
  description: "A simple social links profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#181818] p-20 flex justify-center items-center`}>{children}</body>
    </html>
  );
}
