import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-lg",
    "border outline-none select-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
  ],
  {
    variants: {
      surface: {
        admin: ["font-bold", "transition-colors duration-100"],
        user: [
          "font-medium",
          "transition-all duration-200",
          "hover:-translate-y-0.5 active:scale-[0.98]",
        ],
      },
      variant: {
        default: [
          "bg-blue-600 text-white border-blue-600",
          "hover:bg-blue-700",
          "focus-visible:ring-blue-500",
        ],
        secondary: [
          "bg-slate-100 text-slate-900 border-slate-200",
          "hover:bg-slate-200",
          "focus-visible:ring-slate-400",
        ],
        outline: [
          "bg-transparent text-slate-700 border-slate-300",
          "hover:bg-slate-50",
          "focus-visible:ring-slate-400",
        ],
        ghost: [
          "bg-transparent text-slate-600 border-transparent",
          "hover:bg-slate-100",
          "focus-visible:ring-slate-400",
        ],
        destructive: [
          "bg-red-600 text-white border-red-600",
          "hover:bg-red-700",
          "focus-visible:ring-red-500",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },

    // Only surface-specific tweaks here
    compoundVariants: [
      // Admin: muted, no-nonsense
      {
        surface: "admin",
        variant: "default",
        className: "bg-slate-800 border-slate-800 hover:bg-slate-700",
      },
      {
        surface: "admin",
        variant: "outline",
        className: "border-slate-400 hover:border-slate-500",
      },

      // User: vibrant, shadows
      {
        surface: "user",
        variant: "default",
        className: "shadow-md hover:shadow-lg shadow-blue-500/25",
      },
      {
        surface: "user",
        variant: "destructive",
        className: "shadow-md hover:shadow-lg shadow-red-500/25",
      },
    ],

    defaultVariants: {
      surface: "user",
      variant: "default",
      size: "default",
    },
  },
);
