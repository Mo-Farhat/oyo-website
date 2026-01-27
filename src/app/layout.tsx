import "~/styles/globals.css";

import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "700"], // for h1/h2
  subsets: ["latin"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-LK" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#648402" />
        <meta name="google-site-verification" content="XyhzAlnQq6C8czXtY5ke4N-I9MuyKW8UTOFjjteygEs" />
        <link rel="canonical" href="https://oyoeats.lk" />
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
