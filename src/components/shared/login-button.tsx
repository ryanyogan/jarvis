"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import { IconGitHub, IconSpinner } from "../ui/icons";

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean;
  text?: string;
}

export default function LoginButton({
  text = "Login with GitHub",
  showGithubIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true);

        signIn("github", { callbackUrl: "/" });
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGithubIcon ? (
        <IconGitHub className="mr-2" />
      ) : null}
      {text}
    </Button>
  );
}
