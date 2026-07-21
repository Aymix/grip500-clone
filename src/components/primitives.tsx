import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Centered content container — XL Pneus uses a ~1320px max content width. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1320px] px-4 md:px-6", className)}>
      {children}
    </div>
  );
}
