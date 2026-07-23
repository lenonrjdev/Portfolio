import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./tailwind.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ateliux — UI/UX Designer",
  description: "Portfolio landing page da Ateliux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="m-0 bg-[#0b0b0d] font-[family-name:var(--font-poppins)] text-[#f7f7f8] antialiased [text-rendering:geometricPrecision]">
        {children}
      </body>
    </html>
  );
}
