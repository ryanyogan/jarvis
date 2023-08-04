import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function SidebarFooter({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-between p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
