import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdijabar Mohamed Ibrahim | Software Engineer & AI Developer",
  description:
    "Portfolio of Abdijabar Mohamed Ibrahim — Software Engineer, AI Developer, Prompt Engineering Expert, Flutter Developer, UI/UX Designer, Data Analyst, and Python Developer. I transform ideas into intelligent digital products.",
  keywords: [
    "Software Engineer",
    "AI Developer",
    "Prompt Engineering",
    "Flutter Developer",
    "UI/UX Designer",
    "Data Analyst",
    "Python Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Abdijabar Mohamed Ibrahim | Software Engineer & AI Developer",
    description:
      "I transform ideas into intelligent digital products by combining AI, Prompt Engineering, Flutter, UI/UX, Python, and Data Analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
