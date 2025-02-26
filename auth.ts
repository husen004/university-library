import NextAuth, { User } from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./database/drizzle";
import { eq } from "drizzle-orm";
import { users } from "./database/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email.toString()))
          .limit(1);

        if (user.length === 0) return null;

        const isPasswordValid = await compare(
          credentials.password.toString(),
          user[0].password
        );

        if (!isPasswordValid) return null;

        return {
          id: user[0].id.toString(),
          email: user[0].email,
          name: user[0].fullName
        } as User;

      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callback: {
    async jwt({ token, user }) {},
    async session({ session, token }) {},
  }
});

function CredentialProvider(arg0: {}): import("@auth/core/providers").Provider {
  throw new Error("Function not implemented.");
}
