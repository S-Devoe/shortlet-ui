import type { Metadata } from "next";
import { sans, serif } from "./fonts";
import { clsx } from "clsx";
import "@/app/globals.scss";
import StyledComponentsRegistry from "../lib/AntdRegistry";

export const metadata: Metadata = {
  title: "Shortlet",
  description: "Shortlet App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(serif.variable, sans.variable)}>
      <body className={"relative"}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
