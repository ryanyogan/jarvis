import { cn } from "@/lib/utils";
import Link from "next/link";
import { auth } from "../../../auth";
import { buttonVariants } from "../ui/button";
import { IconGitHub, IconNextChat, IconSeparator } from "../ui/icons";
import LoginButton from "./login-button";
import UserMenu from "./user-menu";

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <Link href="/" target="_blank" rel="nofollow">
          <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
          <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
        </Link>

        <div className="flex items-center">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <LoginButton text="Login with Google" />
          )}
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/ryanyogan/jarvis"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
      </div>
    </header>
  );
}
