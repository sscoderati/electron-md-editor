import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

export const RootLayout = ({ children, className, ...props }: ComponentProps<"main">) => {
  return (
    <main
      className={cn("flex flex-row h-screen", className)}
      {...props}>
      {children}
    </main>
  );
};

export const SideBarLayout = ({ children, className, ...props }: ComponentProps<"aside">) => {
  return (
    <aside
      className={cn("w-[250px] mt-10 h-[100vh + 10px] overflow-auto", className)}
      {...props}>
      {children}
    </aside>
  );
};

export const ContentLayout = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex-1 overflow-auto", className)}
      {...props}>
      {children}
    </div>
  )
);

ContentLayout.displayName = "Content";
