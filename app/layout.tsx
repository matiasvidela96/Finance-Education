// "use client";
import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import Footer from "@/components/ui/footer";
import Context from "../app/contexts/perfilInversor";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata = {
  title: "Educación Financiera",
  description:
    "Educacion Financiera para todos los usuarios que esten interesados en aprender mas sobre el mundo de las inversiones",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <Context>
        <html lang="en">
          <body
            className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-zinc-950 text-gray-200 tracking-tight`}
          >
            <div className="flex flex-col min-h-screen overflow-hidden">
              <Header />
              {children}
              <Footer />
              <Banner />
            </div>
          </body>
        </html>
      </Context>
    </ClerkProvider>
  );
}
