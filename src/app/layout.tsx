import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ChakraLayout from "@/layouts/chakraLayout";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$ -> whoami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ChakraLayout>{children}</ChakraLayout>
        </Providers>
      </body>
    </html>
  );
}
