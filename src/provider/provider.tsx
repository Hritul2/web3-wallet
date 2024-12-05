"use client"; //

import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { RecoilRoot } from "recoil";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Provider;
