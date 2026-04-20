import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prisma Studio — Design Agency",
  description:
    "Prisma Studio is a full-service design agency specializing in UI/UX design, web development, branding, and digital marketing. We craft digital experiences that inspire.",
  keywords: [
    "design agency",
    "web development",
    "UI/UX design",
    "branding",
    "digital marketing",
    "Prisma Studio",
  ],
  authors: [{ name: "Prisma Studio" }],
  openGraph: {
    title: "Prisma Studio — Design Agency",
    description:
      "We craft digital experiences that inspire. UI/UX, Web Development, Branding & Digital Marketing.",
    type: "website",
    locale: "en_US",
    siteName: "Prisma Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prisma Studio — Design Agency",
    description:
      "We craft digital experiences that inspire. Full-service design agency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
