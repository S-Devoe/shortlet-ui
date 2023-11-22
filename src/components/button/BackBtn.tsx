"use client";
import { cn } from "@/lib/utils";
import ArrowLeft from "../icons/ArrowLeft";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}
const BackBtn = ({ className }: Props) => {
  const router = useRouter();
  return (
    <button
      className={cn(
        "text-[1.25rem] text-grayBlack flex items-center font-[500]",
        className
      )}
      onClick={() => router.back()}
    >
      <span className="h-[1.7rem] w-[1.7rem] rounded-full grid place-content-center border border-grayBlack mr-[1.125rem] ">
        <ArrowLeft />
      </span>
      Back
    </button>
  );
};

export default BackBtn;
