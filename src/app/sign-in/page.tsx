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
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <LoginButton />
    </div>
  );
}
