import { Geist, Geist_Mono, Philosopher } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingWidget from "./components/BookingWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const philosopher = Philosopher({
  variable: '--font-philosopher-sans', 
  subsets: ['latin'],
  weight: "400",
})

export const metadata = {
  title: "Home - Moni Adeboye Artistry",
  description: "Professional Makeup Services - Moni Adeboye Artistry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${philosopher.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar className={'top-translate'} />
        {children}
        <Footer />
        <BookingWidget/>
      </body>
    </html>
  );
}
