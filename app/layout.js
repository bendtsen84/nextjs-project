import "@/app/globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
import ToasterClient from "@/components/ToasterClient";

export const metadata = {
  title: "Template",
  description: "",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <ToasterClient />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
