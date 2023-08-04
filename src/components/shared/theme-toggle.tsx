"use client";

import { useTheme } from "next-themes";
import { useTransition } from "react";
import { Button } from "../ui/button";
import { IconMoon, IconSun } from "../ui/icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const [_, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
          setTheme(theme === "light" ? "dark" : "light");
        });
      }}
    >
      {!theme ? null : theme === "dark" ? (
        <IconMoon className="transition-all" />
      ) : (
        <IconSun className="transition-all" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
