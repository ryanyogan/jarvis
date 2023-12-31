"use client";

import { useSidebarSheet } from "@/lib/hooks/use-sidebar-sheet";
import { Chat } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { IconMessage, IconUsers } from "../ui/icons";

interface SidebarItemProps {
  chat: Chat;
  children: React.ReactNode;
}

export function SidebarItem({ chat, children }: SidebarItemProps) {
  const pathname = usePathname();
  const sidebarSheet = useSidebarSheet();
  const isActive = pathname === chat.path;

  if (!chat?.id) return null;

  return (
    <div className="relative">
      <div className="absolute left-2 top-1.5 flex h-6 w-6 items-center justify-center">
        {chat.sharePath ? (
          <IconUsers className="mr-2" />
        ) : (
          <IconMessage className="mr-2" />
        )}
      </div>
      <Link
        href={chat.path}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group w-full pl-8 pr-16",
          isActive && "bg-accent"
        )}
        onClick={sidebarSheet.onClose}
      >
        <div
          className="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all"
          title={chat.title}
        >
          <span className="whitespace-nowrap">{chat.title}</span>
        </div>
      </Link>
      {isActive && <div className="absolute right-2 top-1">{children}</div>}
    </div>
  );
}
