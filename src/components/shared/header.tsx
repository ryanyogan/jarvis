import { clearChats } from "@/actions";
import Link from "next/link";
import { Suspense } from "react";
import { PiCpuLight } from "react-icons/pi";
import { auth } from "../../../auth";
import { Sidebar } from "../sidebar/sidebar";
import { SidebarFooter } from "../sidebar/sidebar-footer";
import { SidebarList } from "../sidebar/sidebar-list";
import { IconSeparator } from "../ui/icons";
import { ClearHistory } from "./clear-history";
import LoginButton from "./login-button";
import { ThemeToggle } from "./theme-toggle";
import UserMenu from "./user-menu";

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        {session?.user ? (
          <Sidebar>
            <Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              <SidebarList userId={session?.user?.sub} />
            </Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            <PiCpuLight className="w-6 h-6 mr-2 dark:hidden text-black" />
            <PiCpuLight className="hidden w-6 h-6 mr-2 dark:block text-white" />
          </Link>
        )}

        <div className="flex items-center space-x-2">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <LoginButton text="Login with Google" />
          )}
        </div>
      </div>
    </header>
  );
}
