import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import React from "react";
import Guy from "@/components/guy/guy.component";
import { SliderComponent } from "./slider.component";

export default function ShortletHomeComponent() {
  return (
    <ConfigProvider theme={theme}>
      <section className="bg-white py-32 px-5 md:px-32">
        <h1 className="title text-5xl md:text-6xl">Just Shortlet it!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#FEFAEC] p-20 flex flex-col items-center justify-center rounded-2xl">
            <Guy />
          </div>
          <SliderComponent />
        </div>
      </section>
    </ConfigProvider>
  );
}
