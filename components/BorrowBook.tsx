"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { borrowBook } from "@/lib/actions/book";

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({
  bookId,
  userId,
  borrowingEligibility: { isEligible, message },
}: Props) => {

  const router = useRouter()
  const [borrowing, setBorrowing] = useState(false)

  const handleBorrowBook = async () => {
    if(!isEligible) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive"
      })
    }

    setBorrowing(true)

    try{
      const result = await borrowBook({ bookId, userId })

      if(result.seccess){
        toast({
          title: "Success",
          description: "Book borrowed successfully"
        })
      }

      router.push('/')
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occured while borrowing the book",
        variant: "destructive"
      })
    } finally {
      setBorrowing(false)
    }
  }

  return (
    <Button className="book-overview_btn" onClick={handleBorrowBook} disabled={borrowing}>
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">{borrowing ? "Borrowing..." : "Borrow Book"}</p>
    </Button>
  );
};

export default BorrowBook;
