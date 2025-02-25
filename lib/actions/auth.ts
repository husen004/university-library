"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import bcrypt, { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, universityId, universityCard } = params;

  // checks if the user already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

    if(existingUser.length > 0) {
      return { success: false, massage: "User already exist" };
    }

    const hashpassword = await hash(password, 10);

    try{
        await db.insert(users).values({
            fullName,
            email,
            universityId,
            password: hashpassword,
            universityCard,
        })

        // await signInWithCredentials({ email, password });
    } catch (error) {
        console.log(error, "Signup error")
        return { success: false, massage: "Signup failed" }
    }
};
