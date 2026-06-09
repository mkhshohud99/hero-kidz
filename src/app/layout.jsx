import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";

const poppins = Poppins(
  {
    weight:["100","200","400","500","600","800"],
  }
)
export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-ten-zeta.vercel.app"),

  title: {
    default: "Hero kids",
    template: "%s | Hero Kids",
  },

  description:
    "Shop premium fashion, clothing, and lifestyle products. Discover quality collections, secure checkout, and fast delivery.",

  keywords: [
    "online shopping",
    "ecommerce",
    "fashion",
    "clothing",
    "Bangladesh online shop",
    "Shohud's ON Shop",
  ],

  applicationName: "Shohud's ON Shop",

  authors: [
    {
      name: "Shohud's ON Shop",
    },
  ],

  creator: "Shohud's ON Shop",
  publisher: "Shohud's ON Shop",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://your-domain.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Shohud's ON Shop",
    siteName: "Shohud's ON Shop",
    description:
      "Shop premium fashion, clothing, and lifestyle products with secure checkout and fast delivery.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shohud's ON Shop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shohud's ON Shop",
    description:
      "Shop premium fashion, clothing, and lifestyle products with secure checkout and fast delivery.",
    images: ["/og-image.jpg"],
  },

  category: "shopping",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className}antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="py-2 md:w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100svh-302px)]">
        {children}
      </main>
        <footer>
          <Footer></Footer>
        </footer>
        </body>
    </html>
  );
}
