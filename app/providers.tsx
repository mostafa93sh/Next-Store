"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        toastOptions={{
          classNames: {
            description: "!text-red-500",
          },
        }}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
