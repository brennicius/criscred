import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrisCred · Pré-análise de crédito",
  description: "Solicite uma pré-análise de crédito INSS, CLT ou FGTS com a CrisCred.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
