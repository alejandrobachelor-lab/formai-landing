import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormAI — AI-конструктор форм для российского бизнеса",
  description: "Создавай формы, которые разговаривают. Статические анкеты и живые диалоговые формы — в одном инструменте.",
  keywords: "формы, AI, конструктор форм, диалоговые формы, Россия, бизнес",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
