import NextAuth, { DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental, // future deprication
} = NextAuth({
  debug: true, // TODO: DISABLE THIS
  providers: [GitHub],
  callbacks: {
    jwt({ token, profile }) {
      if (profile) {
        token.id = profile.id;
        token.image = profile.picture;
      }
      return token;
    },
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
});