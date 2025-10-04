"use client";

import type * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
      defaultTheme="dark"
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  );
}
