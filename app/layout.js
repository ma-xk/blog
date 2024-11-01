import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--variable-spaceMono'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-HR137YGW11" />
      <body className={`${spaceMono.variable} font-sans`}>
        <div className="app">
  
          <div className="w-full">{children}</div>
   
        </div>
      </body>
    </html>
  );
}