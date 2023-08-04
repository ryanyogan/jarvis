import Chat from "@/components/chat/chat";
import { nanoid } from "ai";

export const runtime = "edge";

export default function IndexPage() {
  const id = nanoid();

  return <Chat id={id} />;
}
