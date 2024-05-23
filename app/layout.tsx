import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Livros from "./pages/Livros";
import Reservas from "./pages/Reservas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monitoramento Biblioteca",
  description: "Ambiente para monitoramento da biblioteca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
