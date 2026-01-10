import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL('https://agencia-gl.vercel.app'),
  alternates: {
    canonical: 'https://agencia-gl.vercel.app/',
  },

  title: {
    default: 'GLDev - Desarrollador Full Stack',
    template: '%s | GLDev'
  },
  description: 'Desarrollador Full Stack especializado en React, Next.js y Node.js. Portfolio de proyectos y experiencia técnica.',
  keywords: ['desarrollador', 'React', 'Next.js', 'Full Stack', 'portfolio', 'JavaScript'],
  authors: [{ name: 'Gustavo Leon' }],

  verification: {
    google: 'xIj9x4L-C7LxU0Lm-a3r3nuVTdSjA--FoZ3LbFrWsXk',
  },

  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://agencia-gl.vercel.app/',
    title: 'GLDev - Desarrollador Full Stack',
    description: 'Portfolio profesional de desarrollo web',
    siteName: 'GLDev Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GLDev Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GLDev - Desarrollador Full Stack',
    description: 'Portfolio profesional de desarrollo web',
    images: ['/og-image.png'],
    creator: '@tuusuario',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gustavo Leon",
    url: "https://agencia-gl.vercel.app",
    jobTitle: "Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React, Next.js y Node.js.",
    sameAs: [
      "https://github.com/GLM1996",
      //"https://www.linkedin.com/in/tuusuario"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
