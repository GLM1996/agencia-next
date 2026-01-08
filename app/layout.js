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
  metadataBase: new URL('https://developer-gl.vercel.app'),
  alternates: {
    canonical: '/',
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
    url: 'https://developer-gl.vercel.app/',
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
