import { getChat } from "@/actions";
import Chat from "@/components/chat/chat";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { auth } from "../../../../auth";

export const runtime = "edge";
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export interface ChatPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ChatPageProps): Promise<Metadata> {
  const session = await auth();

  if (!session?.user) {
    return {};
  }

  const chat = await getChat(params.id, session.user.sub);

  return {
    title: chat?.title.slice(0, 50) ?? "Chat",
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const session = await auth();

  if (!session?.user) {
    redirect(`/sign-in?next=/chat/${params.id}`);
  }

  const chat = await getChat(params.id, session.user.sub);

  if (!chat) {
    notFound();
  }

  // if (chat?.userId !== session?.user?.sub) {
  //   notFound();
  // }

  return <Chat id={chat.id} initialMessages={chat.messages} />;
}
