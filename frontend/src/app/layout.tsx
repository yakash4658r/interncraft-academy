import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Internroll - Launch Your Career with Premium Internships",
  description: "Join 10,000+ learners gaining real-world experience through mentor-led internships. Build projects, earn certificates, and get hired by top companies.",
  keywords: "internship, online learning, career development, skills training, mentorship",
  openGraph: {
    title: "Internroll - Premium Internship Programs",
    description: "Real projects. Industry mentorship. Verified certificates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
