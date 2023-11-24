import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface Props {
  className?: string;
  variant?: "success" | "default";
  text: string;
}
const Badge = ({ className, variant, text }: Props) => {
  return (
    <span
      className={cn(
        badgeVariants({
          className,
          variant,
        })
      )}
    >
      {text}
    </span>
  );
};

export default Badge;

const badgeVariants = cva(
  "inline-flex items-center capitalize leading-[none] justify-center w-full px-[0.5rem] py-[0.125rem] rounded-[6.25rem] text-[0.75rem]",
  {
    variants: {
      variant: {
        default: "bg-orange text-white",
        success: "text-orange bg-[#D6FFE2] text-[#003D13] ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
