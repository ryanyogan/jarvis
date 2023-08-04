import { cn } from "@/lib/utils";
import { ExternalLink } from "./external-link";

export function FooterText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "px-2 text-center text-xs leading-normal text-muted-foreground",
        className
      )}
      {...props}
    >
      Jarvis AI built with{" "}
      <ExternalLink href="https://openai.com">OpenAI</ExternalLink> and{" "}
      <ExternalLink href="https://vercel.com/storage/kv">
        Vercel KV
      </ExternalLink>
      .
    </p>
  );
}
