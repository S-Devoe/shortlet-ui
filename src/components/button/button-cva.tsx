import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import React from "react";

export default function Button({
  text,
  type,
  className,
  onClick,
  variant,
}: {
  text: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  variant?: any;
}) {
  return (
    <button
      className={cn(
        buttonVariants({
          className,
          variant,
        })
      )}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

const buttonVariants = cva(
  "inline-flex items-center justify-center w-full py-[0.5rem] rounded-md text-[1rem] font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-orange text-white hover:bg-orange/90 text-[1rem] ",
        orangeOutline:
          "border border-orange text-[0.875rem]  text-orange bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
