"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { Button, ButtonProps } from "../ui/button";
import { IconSpinner } from "../ui/icons";

interface LoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean;
  text?: string;
}

export default function LoginButton({
  text = "Login with Google",
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

        signIn("google", { callbackUrl: "/" });
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGithubIcon ? (
        <BiLogoGoogle className="mr-2" />
      ) : null}
      {text}
    </Button>
  );
}
