import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx';
import './globals.css'
import { createClient } from '@/prismicio';


const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})



export async function generateMetadata(): Promise<Metadata> {
 const client = createClient();
 const settings  = await client.getSingle("settings");
 
  return {
    title: settings.data.site_title || "fallback site title",
    description: settings.data.meta_descirption || "flowrise description fallback",
    openGraph: {
      images: [settings.data.og_image.url || "fallback image"],
    },
  }
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <header>this is header</header>
        {children}
        <footer>this is footer</footer>
        </body>
    </html>
  );
}
