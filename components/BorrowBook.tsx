"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { borrowBook } from "@/lib/actions/book"

const BorrowBook = ({  }) => {
  return (
    <Button className='book-overview_btn' onClick={borrowBook}>
        <Image src="/icons/book.svg" alt='book' width={20} height={20} />
        <p className='font-bebas-neue text-xl text-dark-100'>Borrow</p>
    </Button>
  )
}

export default BorrowBook