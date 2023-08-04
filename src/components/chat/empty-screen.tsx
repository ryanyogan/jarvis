import { UseChatHelpers } from "ai/react";
import { Button } from "../ui/button";
import { IconArrowRight } from "../ui/icons";

const exampleMessages = [
  {
    heading: "Find a good movie",
    message: `Help me find 3 movies to watch, please select each movie with a high rating, of either Comedy, Action, Drama or Thriller made from 1990 to 2023 in the United States`,
  },
  {
    heading: "Check out a new series",
    message: `Help me find a 3 streaming shows to watch, please select each show from either Netflix, Hulu, Disney+, HBO or Apple that is widely liked, preference to shows that already have a season out.`,
  },
  {
    heading: "What sounds good for dinner",
    message: `Please help me with dinner, a family of four, create some fun in our lives with a new meal idea.  Pleae either include highly-detailed step by step instructions for the receipe, including purchasing of materials`,
  },
  {
    heading: "What to do today",
    message: `I live in St. Louis, MO, we have two young boys, help us find something awesome to do today!`,
  },
  {
    heading: "Draft an email",
    message: `Draft an email to my boss about the following: \nI Quit!`,
  },
];

export default function EmptyScreen({
  setInput,
}: Pick<UseChatHelpers, "setInput">) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Hi, I am Jarvis an AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          I am an AI chatbot using OpenAI and a KV store helping me remember
          your conversations.
        </p>
        <p className="leadning-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
