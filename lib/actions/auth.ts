"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import bcrypt, { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import ratelimit from "../ratelimit";
import { redirect } from "next/navigation";

export const signInWithCredentials = async (params: {
  email: string;
  password: string;
}): Promise<{ success: boolean; error: string }> => {
  const { email, password } = params;

  const id = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(id)

  if (!success) return redirect("/too-fast");

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true, error: "Logged in successfully" };
  } catch (error) {
    console.log(error, "Signin error");
    return { success: false, error: "Signin failed" };
  }
};

export const signUp = async (
  params: AuthCredentials
): Promise<{ success: boolean; error: string }> => {
  const { fullName, email, password, universityId, universityCard } = params;

  const id = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(id)

  if (!success) return redirect("/too-fast");

  // checks if the user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "User already exist" };
  }

  const hashpassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hashpassword,
      universityCard,
    });

    // await signInWithCredentials({ email, password });

    return { success: true, error: "Signed up successfully" };
  } catch (error) {
    console.log(error, "Signup error");
    return { success: false, error: "Signup failed" };
  }
};
