import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';

const geistSans = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geistMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const metadata = {
  title: 'Astrology Landing',
  description: 'Discover your stars',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ zIndex: 0 }} 
      >
        {children}
      </body>
    </html>
  );
}
