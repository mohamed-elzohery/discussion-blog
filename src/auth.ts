import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "./db";
import GitHub from "@auth/core/providers/github";

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET)
  throw new Error("missing GitHub credentials");
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.GH_CLIENT_ID,
      clientSecret: process.env.GH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session && user) {
        session.user!.id = user.id;
      }
      return session;
    },
  },
});
