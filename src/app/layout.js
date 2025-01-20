import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-auto">
        
        {/* Pass navItems directly in the Navbar component */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
