import Header from "@/components/layout/Header";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar.jsx";
import { Ubuntu, IBM_Plex_Mono } from "next/font/google";
import ToasterProvider from "@/components/UI/Toaster";
import siteMetadata from "@/constants/metadata";
import { personSchema } from "@/constants/JSON-LD";

// 🌐 Fonts configuring with native variables
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ibmPlexMono.variable} bg-[#242930] min-h-screen w-full flex flex-col text-text-main m-0 p-0 overflow-x-hidden`}
      >
        <ToasterProvider>
          <Navbar />
          <Header />

          <main className="w-full flex-1 flex flex-col">{children}</main>
        </ToasterProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}',{page_path: window.location.pathname});`}
        </Script>
      </body>
    </html>
  );
}
