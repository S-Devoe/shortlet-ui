"use client";

import Logo from "@/assets/logo.component";
import theme from "@/theme/themeConfig";
import { ConfigProvider, Divider, Flex } from "antd";
import { Typography } from "antd";
import clsx from "clsx";
import Link from "next/link";
import ComingSoonForm from "./comingSoonForm.component";

const { Title, Paragraph } = Typography;
export default function Footer({
  type = "main",
  reference,
}: {
  type?: "main" | "coming-soon";
  reference?: React.RefObject<HTMLInputElement>;
}) {
  return (
    <ConfigProvider theme={theme}>
      <footer className="py-20 md:py-20 px-4 md:px-36 bg-[#110E2F] text-[#E1E0F6]">
        <div className="pb-32 text-center">
          <Title className="text-center">
            {type === "main" ? "Reserve a home now" : "Get Notified First"}
          </Title>
          <Paragraph className="text-center">
            {type === "main"
              ? `Contrast offers an intuitive and user-friendly interface. The
            webinar room is highly customizable.`
              : `Be the first to get notified when we launch and easily book hassle free homes and shortstays.`}
          </Paragraph>
          {type === "main" && (
            <Link href="https://wa.link/w5fb6p">
              <button
                className={clsx(
                  "bg-primary",
                  "px-16",
                  "py-4",
                  "rounded-lg",
                  "font-bold",
                  "mt-10"
                )}
              >
                Get Started
              </button>
            </Link>
          )}
          {type === "coming-soon" && <ComingSoonForm reference={reference!} />}
        </div>
        <Divider className="bg-[#322B8C]" />
        <div>
          <div className="flex items-center md:items-start justify-between flex-col-reverse md:flex-row">
            <div className="text-center md:text-left">
              <Logo color={"currentColor"} />
              &copy;SHORTLET APP 2023
            </div>
            <div className="flex w-full md:w-fit justify-center md:justify-start gap-20 md:gap-6 mb-10 md:mb-0">
              <Link href="/about">About</Link>
              <Link href="/about?s=faq">FAQ</Link>
            </div>
          </div>
        </div>
      </footer>
    </ConfigProvider>
  );
}
