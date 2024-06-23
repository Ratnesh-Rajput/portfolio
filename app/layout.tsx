import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ratnesh Singh Rajput — Software Development Engineer",
  description:
    "Full-Stack Developer and Product Designer. Focused on interfaces and experiences, working remotely from Bhopal(M.P.), India.",
  generator: "Next.js",
  applicationName: "Ratnesh Singh Rajput",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Ratnesh Singh Rajput — Software Development Engineer",
    description:
      "Full-Stack Developer and Product Designer. Focused on interfaces and experiences, working remotely from Bhopal(M.P.), India.",
    url: "https://ratnesh-portfolio-three.vercel.app/",
    siteName: "ratnesh-portfolio-three.vercel.app",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Ratnesh Singh Rajput — Software Development Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratnesh Singh Rajput — Software Development Engineer",
    description:
      "Full-Stack Developer and Product Designer. Focused on interfaces and experiences, working remotely from Bhopal(M.P.), India",
    
    images: [
      "",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
