import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "heyfugue",
  description: "hi! im fugue, a cs student who loves art, music and storytelling!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${lato.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}