"use client";
import { ConfigProvider, Flex, Row, Typography } from "antd";
import theme from "@/theme/themeConfig";
import React, { useEffect, useRef } from "react";
import ReservationComponent from "./reservation.component";
import CustomDisclosure from "@/components/disclosure/disclosure.component";
import { useSearchParams } from "next/navigation";

const { Title } = Typography;

export default function CitiesAboutComponent() {
  const ref = useRef<HTMLElement>(null);
  const queryParams = useSearchParams();
  const section = queryParams?.get("s");
  useEffect(() => {
    if (section === "faq") {
      if (ref.current != null)
        ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);
  return (
    <ConfigProvider theme={theme}>
      <section className="bg-[#FEFAEC] py-32 px-5 md:px-32 text-center">
        <Title className="font-serif text-center text-4xl md:text-5xl font-semibold">
          Hassle-free holiday & short stay homes for Everyone.
        </Title>
        <div className="mt-8 md:mx-40">
          <span>
            Are you dreaming of a hassle-free holiday? Look no further than our
            short stay homes for everyone. We pride ourselves on providing
            comfortable and convenient accommodations that cater to your every
            need. Our well-equipped homes offer a cozy and inviting atmosphere,
            perfect for unwinding after a day of exploring. Whether you&apos;re
            traveling solo, with family, or friends, our homes are designed to
            accommodate all. From spacious living areas to fully equipped
            kitchens, we&apos;ve thought of everything to ensure your stay is as
            comfortable as possible. Plus, our prime locations offer easy access
            to nearby attractions and amenities, making your vacation even more
            enjoyable. So why wait? Book your stay with us today and experience
            a truly hassle-free holiday that you&apos;ll cherish forever. Get
            ready to relax, rejuvenate, and create unforgettable memories. We
            can&apos;t wait to welcome you!
          </span>
        </div>
      </section>
      <section className="bg-[#FEFAEC] bg-home-hero bg-cover md:bg-contain bg-no-repeat bg-right py-20 md:px-24">
        <div className="mx-auto md:mx-0 w-fit">
          <ReservationComponent />
        </div>
      </section>
      <section className="bg-white py-32 px-5 md:px-32" ref={ref}>
        <Title className="font-serif text-4xl md:text-5xl font-semibold">
          Frequently Asked Questions
        </Title>

        <CustomDisclosure />
      </section>
    </ConfigProvider>
  );
}
