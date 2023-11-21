"use client";
import { clsx } from "clsx";
import Button from "@/components/button/button";
import Logo from "@/assets/logo.component";
import Link from "next/link";
import { Flex } from "antd";
import Footer from "@/components/footer/footer";
import React from "react";
import BurgerComponent from "@/components/burger/burger.component";
import Menu from "@/components/mobile/menu.component";
import { usePathname, useSearchParams } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  React.useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams.get("s")]);

  return (
    <>
      <header
        className={clsx(
          "w-full",
          "px-2",
          "sm:px-12",
          "lg:px-36",
          "py-10",
          { "text-lime": !["/about"].includes(pathname) },
          "absolute",
          "top-0 z-30",
          "bg-transparent"
        )}
      >
        <Flex justify="space-between" align="center">
          <div className="hidden md:block">
            <Flex gap={24} align={"center"}>
              <Link href="/about">About</Link>
              <Link href="/about?s=faq">FAQ</Link>
            </Flex>
          </div>
          <Link
            href={"/"}
            className={clsx({ "text-white": !["/about"].includes(pathname) })}
          >
            <Logo color={"currentColor"} />
          </Link>
          <div className="hidden md:block">
            <Flex gap={16} align={"center"}>
              <Link href="https://wa.link/w5fb6p">
                <Button
                  type="primary"
                  className={[
                    "bg-primary",
                    "px-5",
                    "py-3",
                    "rounded",
                    "text-sm text-white",
                  ]}
                  text={"Get Started"}
                />
              </Link>
            </Flex>
          </div>
          <div className="block md:hidden">
            <BurgerComponent onClick={() => setOpen(true)} />
          </div>
        </Flex>
      </header>
      <main className="bg-white w-full">{children}</main>
      <Footer />
      {open && <Menu onClick={() => setOpen(false)} action={() => {}} />}
    </>
  );
}
