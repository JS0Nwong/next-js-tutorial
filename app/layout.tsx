import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans} antialiased`}>{children}</body>
    </html>
  );
}
