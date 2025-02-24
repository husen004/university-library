import NextAuth from "next-auth";
import { db } from "./database/drizzle";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        if (!credetials?.email || !credentials?.password) {
          return null;
        }

        const user = await db
          .select()
          .from(users)
          .where(eq("email", credentials.email.toString()));
      },
    }),
  ],
});

function CredentialProvider(arg0: {}): import("@auth/core/providers").Provider {
  throw new Error("Function not implemented.");
}
