import type { Metadata } from "next";
import NavigationBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Bhavesh Katwale | Cinematographer & Photographer",
  description:
    "Discover the artistic journey of Bhavesh Katwale, a passionate cinematographer and photographer capturing the world through a unique lens.",
  openGraph: {
    title: "Bhavesh Katwale | Cinematographer & Photographer",
    description:
      "Explore the portfolio of Bhavesh Katwale, showcasing stunning cinematography and photography projects. Dive into the world of visual storytelling.",
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
      "A glimpse into Bhavesh Katwale’s captivating visual storytelling through cinematography and photography.",
    images: ["https://www.indianfilmaker.com/bg.jpeg"],
  },
};

export default function About() {
  return (
    <div className="bg-white">
      <NavigationBar />
    </div>
  );
}
