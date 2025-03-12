"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";

export const borrowBook = async (params: BorrowBookParams) => {
  const { userId, bookId } = params;

  try {
    const book = await db
      .select({ availableCopies: books.availableCopies })
      .from(books)
      .where(eq(books.id, bookId))
      .limit(1);

      if(!book.length || book[0].availableCopies <= 0){
        return {
            success: false,
            error: "No book to Borrow"
        }
      }

      const dueData = new Date()
  } catch (error) {
    console.log(error);

    return {
      seccess: false,
      error: "Error borrow books",
    };
  }
};
