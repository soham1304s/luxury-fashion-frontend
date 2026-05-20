import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/layout/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://xyzfashion.com"),
  title: {
    default: "XYZ Fashion | Luxury Fashion Ecommerce",
    template: "%s | XYZ Fashion"
  },
  description: "A cinematic luxury fashion ecommerce experience for sculptural tailoring, knitwear, accessories, and editorial collections.",
  openGraph: {
    title: "XYZ Fashion",
    description: "Quiet luxury clothing, editorial ecommerce, and limited-run collections.",
    type: "website",
    images: ["/opengraph-image.jpg"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain font-sans">
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
