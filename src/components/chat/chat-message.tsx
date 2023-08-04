import { cn } from "@/lib/utils";
import { Message } from "ai";
import { IconOpenAI, IconUser } from "../ui/icons";

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn("group relative mb-4 flex items-start md:-ml-12")}
      {...props}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
          message.role === "user"
            ? "bg-background"
            : "bg-primary text-primary-foreground"
        )}
      >
        {message.role === "user" ? <IconUser /> : <IconOpenAI />}
      </div>
    </div>
  );
}
