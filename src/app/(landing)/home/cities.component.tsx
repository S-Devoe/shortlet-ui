"use client";
import Button from "@/components/button/button";
import { Col, ConfigProvider, Flex, Row, Typography } from "antd";
import Image from "next/image";
import theme from "@/theme/themeConfig";
import React from "react";
import rightPic from "@/assets/home/right-city.png";
import leftPic from "@/assets/home/left-city.png";

const { Title } = Typography;

export default function CitiesHomeComponent() {
  return (
    <ConfigProvider theme={theme}>
      <section className="bg-white py-32 px-5 md:px-32">
        <Title className="font-serif text-center text-4xl md:text-5xl font-semibold">
          The best homes in Lagos, Abuja, PH City & Ibadan
        </Title>
        <div className="mt-8 flex flex-col-reverse md:flex-row gap-3">
          <div className="md:w-1/2 mx-1 translate-y-12">
            <div className="rounded-2xl overflow-hidden mb-12">
              <Image src={leftPic} alt="Guy" width={500} height={500} />
            </div>
            <span>
              On shortlet you get to experience variety of interesting and
              unique accommodation in different locations of your choosing.
            </span>
          </div>
          <div className="md:w-1/2 mx-1">
            <div className="rounded-2xl overflow-hidden mb-12">
              <Image src={rightPic} alt="Guy" width={500} height={500} />
            </div>
            <ol className="list-decimal text-[#005A1D] font-semibold ml-8">
              <li className="font-serif">Choose your Shortlet.</li>
              <li className="font-serif">We confirm your reservation.</li>
              <li className="font-serif">Finalize with Host and Pay online.</li>
              <li className="font-serif">Welcome Home!</li>
            </ol>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
}
