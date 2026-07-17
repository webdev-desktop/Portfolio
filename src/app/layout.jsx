// "use client";
import Header from "@/components/layout/Header";
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
      </body>
    </html>
  );
}
