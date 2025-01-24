import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-auto">
        <div className="flex justify-between items-center ">
          <div className="fixed top-[2vh] left-[90vw] z-10">
            <Link
              href="/projects"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] "
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <div className="p-5 text-base">Projects</div>
              </span>
            </Link>
          </div>
          <div className="fixed top-[2vh] left-[2vw] z-10"> 
          <Link href={"/"} className="flex items-center justify-center">
  <FaHome size={33} color="red" />
</Link>

          </div>
        </div>
        {/* Pass navItems directly in the Navbar component */}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}