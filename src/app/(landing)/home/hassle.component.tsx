"use client";
import Button from "@/components/button/button";
import { Card, ConfigProvider, Flex, Typography } from "antd";
import theme from "@/theme/themeConfig";
import React from "react";
import Guy from "@/components/guy/guy.component";
import Link from "next/link";

const { Title } = Typography;

export default function HassleHomeComponent() {
  return (
    <ConfigProvider theme={theme}>
      <section className="bg-[#EEEED8] py-32 px-5 md:px-32">
        <Title className="text-5xl md:text-6xl text-center">
          Hassle-free holiday & short stay homes for Everyone.
        </Title>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Card>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
              Whether you&apos;re a Guest
            </h3>
            <span className="my-2">
              There are variety of interesting and unique accommodations,
              it&apos;s cost effective and the rentals offer amenities like
              kitchen and laundry facilities for added convenience.
            </span>
            <div className="flex flex-col-reverse md:flex-row md:justify-between mt-8 gap-8 md:items-end">
              <Link href="https://wa.link/w5fb6p">
                <Button
                  text="Get Started"
                  variant="orangeOutline"
                  className={["w-fit h-fit"]}
                />
              </Link>
              <Guy width={200} />
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
              or choose to be a Host
            </h3>
            <span className="my-2">
              Renting out your building on Shortlet can be a great way to earn
              extra money. You can set your own rates and adjust them based on
              demand or seasonality.
            </span>
            <div className="flex flex-col-reverse md:flex-row md:justify-between mt-8 gap-8 md:items-end">
              <Link href="https://wa.link/w5fb6p">
                <Button
                  text="Get Started"
                  variant="orangeOutline"
                  className={["w-fit h-fit"]}
                />
              </Link>
              <Guy width={200} />
            </div>
          </Card>
        </div>
      </section>
    </ConfigProvider>
  );
}
