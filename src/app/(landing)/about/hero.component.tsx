"use client";
import Button from "@/components/button/button";
import theme from "@/theme/themeConfig";
import { ConfigProvider, Flex, Typography } from "antd";
import Link from "next/link";
import React from "react";

const { Title, Paragraph } = Typography;

export default function AboutHeroSection() {
  return (
    <ConfigProvider theme={theme}>
      <div className="relative h-max w-full">
        <section className="bg-[#FEFAEC] py-32 px-5 md:px-32 bg-scroll bg-cover bg-center text-[#005A1D]">
          <Title className="text-5xl md:text-6xl z-20 text-center">
            Hassle-free holiday homes &amp; shortstays for{" "}
            <span className="text-[#008F2D] font-serif">Everyone.</span>
          </Title>
          <Flex gap={24} justify="center">
            <Link href="https://wa.link/w5fb6p">
              <Button
                type="primary"
                text="Get Started"
                width="large"
                className={["z-30 text-white"]}
              />
            </Link>
          </Flex>
        </section>
      </div>
    </ConfigProvider>
  );
}
