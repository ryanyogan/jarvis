import Chat from "@/components/chat/chat";
import { nanoid } from "ai";
import { redirect } from "next/navigation";
import { auth } from "../../auth";

export const runtime = "edge";

export default async function IndexPage() {
  const session = await auth();
  if (!session?.user) {
    return redirect("/sign-in");
  }

  const id = nanoid();

  return <Chat id={id} />;
}
