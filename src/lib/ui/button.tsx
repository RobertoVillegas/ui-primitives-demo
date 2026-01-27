import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { useUISurface, type Surface } from "./surface-context";
import { buttonVariants } from "./button.variants";

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    surface?: Surface;
  };

export function Button({
  className,
  variant,
  size,
  surface,
  asChild = false,
  ...props
}: ButtonProps) {
  const inheritedSurface = useUISurface();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({
          surface: surface ?? inheritedSurface,
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}
