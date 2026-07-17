const siteMetadata = {
  metadataBase: new URL("https://webdevzone.in"),
  title: {
    default: "WebDevZone | Portfolio of Web Developer",
    template: "%s | WebDevZone",
  },
  description:
    "Explore the portfolio of Apurv, a web developer specializing in React, Next.js, JavaScript, and MERN Stack. Discover projects, skills, and development journey.",

  keywords: [
    "Apurv",
    "Apurv Portfolio",
    "WebDevZone",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Portfolio Website",
    "HTML CSS JavaScript",
    "Portfolio",
  ],

  authors: [
    {
      name: "Apurv",
      url: "https://webdevzone.in",
    },
  ],

  creator: "Apurv",
  publisher: "WebDevZone",
  category: "Technology",
  applicationName: "WebDevZone",
  referrer: "origin-when-cross-origin",

  openGraph: {
    title: "WebDevZone | Portfolio of Apurv",
    description:
      "Explore my portfolio featuring modern web applications, projects, and skills in React, Next.js, and MERN Stack.",
    url: "https://webdevzone.in",
    siteName: "WebDevZone",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebDevZone Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "WebDevZone | Portfolio of Web Developer",
    description:
      "Explore my portfolio featuring projects built with React, Next.js, and MERN Stack.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://webdevzone.in",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default siteMetadata;
