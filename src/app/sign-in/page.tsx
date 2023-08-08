import LoginButton from "@/components/shared/login-button";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function SignInPage() {
  const session = await auth();

  // If the user is signed in, redirect to home
  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-2xl px-4  h-[calc(100vh-theme(spacing.16))] flex justify-center items-center">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Hi, I am Jarvis an AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          I am an AI chatbot using OpenAI and a KV store helping me remember
          your conversations.
        </p>
        <p className="leadning-normal text-muted-foreground">
          You will need to login as I can save your chat history, you may also
          share chats with anyone!
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
