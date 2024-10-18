import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhavesh Katwale | Cinematographer & Photographer",
  description:
    "Welcome to Bhavesh Katwale’s portfolio showcasing stunning cinematography and photography that captures the essence of storytelling through visuals.",
  openGraph: {
    title: "Bhavesh Katwale | Cinematographer & Photographer",
    description:
      "Explore Bhavesh Katwale’s visual portfolio, featuring breathtaking cinematography and photography projects that tell compelling stories.",
    url: "https://www.indianfilmaker.com/bg.jpeg",
    images: [
      {
        url: "https://www.indianfilmaker.com/bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Bhavesh Katwale - Cinematographer & Photographer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavesh Katwale | Cinematographer & Photographer",
    description:
      "Discover the captivating portfolio of Bhavesh Katwale, a creative cinematographer and photographer with a passion for visual storytelling.",
    images: ["https://www.indianfilmaker.com/bg.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
