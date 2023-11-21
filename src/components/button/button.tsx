import clsx from "clsx";
import React from "react";

export default function Button({
  text,
  type,
  className,
  width = "small",
  onClick,
}: {
  text: string;
  type: "primary" | "secondary";
  width?: "small" | "medium" | "large";
  className?: string[];
  onClick?: () => void;
}) {
  return (
    <button
      className={clsx(
        "rounded-lg",
        { "bg-primary": type === "primary" },
        { "bg-transparent border": type === "secondary" },
        { "px-5": width === "small" },
        { "px-16": width === "large" },
        "py-3",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
