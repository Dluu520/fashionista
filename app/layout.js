import Navbar from "./components/Navbar";
import "./styles/globals.css";
import { Raleway, Inter } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Fashionista",
  description: "Hot Trends straight to your closet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
