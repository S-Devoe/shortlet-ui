import Button from "@/components/button/button";
import { Flex } from "antd";
import Link from "next/link";
import React from "react";

export default function HomeHeroSection() {
  return (
    <div className="relative h-max w-full">
      <div className="absolute bg-black/40 z-10 h-full w-full"></div>
      <section className="bg-home-hero py-32 px-5 md:px-32 lg:pr-[32rem] bg-scroll bg-cover bg-center text-[#EEEED8]">
        <h1 className="title text-5xl md:text-6xl z-20">
          Hassle-free holiday homes &amp; shortstays for{" "}
          <span className="text-[#E0FFA9] font-serif">Everyone.</span>
        </h1>
        <Flex gap={24}>
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
  );
}
