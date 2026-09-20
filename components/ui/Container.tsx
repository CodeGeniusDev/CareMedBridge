import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  narrow?: boolean;
  wide?: boolean;
}

/**
 * Responsive page container.
 * Default: max-w-7xl (1280px), with responsive horizontal padding.
 * narrow: max-w-4xl — for content-only sections
 * wide: max-w-screen-2xl — for full-bleed inner content
 */
export function Container({
  as: Tag = "div",
  narrow,
  wide,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow && "max-w-4xl",
        wide && "max-w-screen-2xl",
        !narrow && !wide && "max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
