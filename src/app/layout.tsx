import type { Metadata, ResolvingMetadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createClient } from '@/prismicio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })



export async function generateMetadata(): Promise<Metadata> {
 const client = createClient();
 const settings  = await client.getSingle("settings");
 
  return {
    title: settings.data.site_title[0].text || "fallback site title",
    description: settings.data.meta_description || "flowrise description fallback",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        
        </body>
    </html>
  )
}
