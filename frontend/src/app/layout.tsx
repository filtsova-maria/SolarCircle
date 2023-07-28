import { Metadata } from "next";
import { Rubik, Ubuntu } from "next/font/google";
import "styles/global.css";

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: "400",
  variable: '--font-ubuntu',
  subsets: ['latin'],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Solar Circle',
  description: 'Main news feed'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${ubuntu.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}