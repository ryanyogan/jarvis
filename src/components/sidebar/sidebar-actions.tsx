"use client";

import { Chat, ServerActionResult } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { IconShare } from "../ui/icons";
import { Tooltip, TooltipTrigger } from "../ui/tooltip";

interface SidebarActionProps {
  chat: Chat;
  removeChat: (args: { id: string; path: string }) => ServerActionResult<void>;
}

export function SidebarActions({ chat, removeChat }: SidebarActionProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [isRemovePending, startRemoveTransition] = useTransition();
  const [isSharePending, startShareTransition] = useTransition();
  const router = useRouter();

  const copyShareLink = useCallback(async (chat: Chat) => {
    if (!chat.sharePath) {
      return toast.error("Could not copy share link to clipboard");
    }

    const url = new URL(window.location.href);
    url.pathname = chat.sharePath;
    navigator.clipboard.writeText(url.toString());
    setShareDialogOpen(false);
    toast.success("Share link copied to clipboard", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontSize: "14px",
      },
      iconTheme: {
        primary: "white",
        secondary: "black",
      },
    });
  }, []);

  return (
    <>
      <div className="space-x-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="h-6 w-6 p-0 hover:bg-background"
              onClick={() => setShareDialogOpen(true)}
            >
              <IconShare />
              <span className="sr-only">Share</span>
            </Button>
          </TooltipTrigger>
        </Tooltip>
      </div>
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share link to chat</DialogTitle>
            <DialogDescription>
              Anyone with the URL will be able to view the shared chat.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1 rounded-md border p-4 text-sm">
            <div className="font-medium">{chat.title}</div>
            <div className="font-muted-foreground">
              {formatDate(chat.createdAt)} · {chat.messages.length} messages
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
