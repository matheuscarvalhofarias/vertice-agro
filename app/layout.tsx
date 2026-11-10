import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TecnologyX Agro — Tecnologia, Dados e Automação",
  description: "TecnologyX Agro — Inteligência de Crédito Rural, Dados e Automação.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/assets/tx-logo-mark.svg",
    shortcut: "/assets/tx-logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
