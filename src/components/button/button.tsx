import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export default function Button({
  text,
  type,
  className,
  width = "small",
  onClick,
  disabled,
  icon,
  variant,
  height,
}: {
  text: string;
  type?: "button" | "submit" | "reset"; // this should be the normal values for a button type in HTML
  width?: "small" | "medium" | "large" | "full";
  height?: "small" | "medium" | "large";
  onClick?: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: JSX.Element;
  disabled?: boolean;
  className?: string | string[];
}) {
  return (
    <button
      className={cn(
        // { "bg-transparent border": type === "secondary" },
        { "px-5": width === "small" },
        { "px-16": width === "large" },
        { "px-5": width === "small" },
        { "px-16": width === "large" },
        { "px-10": width === "medium" },
        { "w-full": width === "full" },
        { "text-sm py-3": height === "small" },
        { "text-base py-5": height === "medium" },
        { "text-lg py-[21px]": height === "large" },
        "py-3",
        buttonVariants({
          className,
          variant,
        })
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {icon && <>{icon}</>}
    </button>
  );
}

const buttonVariants = cva(
  "inline-flex items-center justify-center w-fit py-[0.5rem] rounded-md text-[1rem] font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-orange text-white hover:bg-orange/90 text-[1rem] ",
        orangeOutline:
          "border border-orange text-[0.875rem] text-orange px-4 bg-transparent",
        outline:
          "border border-primary text-[0.875rem] text-primary px-4 bg-transparent",
        secondary: "bg-transparent border border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
