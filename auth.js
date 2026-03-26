import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongo";

const COOKIE_PREFIX = process.env.AUTH_COOKIE_PREFIX ?? "app1";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.RESEND_EMAIL,
    }),
  ],
  session: {
    strategy: "database", // Persist sessions in the database via the adapter
  },
  adapter: MongoDBAdapter(clientPromise),
  basePath: "/api/auth",
  pages: {
    signIn: "/login",
    verifyRequest: "/verify",
    newUser: "/onboarding",
  },
  cookies: {
    sessionToken: {
      name: `${COOKIE_PREFIX}.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    csrfToken: {
      name: `${COOKIE_PREFIX}.csrf-token`,
      options: {
        httpOnly: false, // CSRF token is read by the client
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    callbackUrl: {
      name: `${COOKIE_PREFIX}.callback-url`,
      options: {
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    // OAuth state cookie; isolated for consistency with other apps on the same domain
    state: {
      name: `${COOKIE_PREFIX}.state`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
});
