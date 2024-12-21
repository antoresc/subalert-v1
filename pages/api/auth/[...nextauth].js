import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // Optional: If using Prisma
import { PrismaClient } from "@prisma/client"; // Optional: If using Prisma

const prisma = new PrismaClient(); // Optional: If using Prisma

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Optional: Add additional scopes if needed
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prisma), // Optional: If using Prisma
  callbacks: {
    async jwt({ token, account }) {
      // Store access and refresh tokens in the JWT
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add access and refresh tokens to the session
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure you have a secret set
}); 