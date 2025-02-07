import React from 'react'
import BookCover from './BookCover'
import Link from 'next/link'

const BookCard = ({ 
    id, 
    title, 
    genre, 
    coverColor, 
    coverImage, 
    isLoanedBook = false, 
}: Book) => (
    <li>
    <Link href={`/books/${id}`}>
        <BookCover coverColor={coverColor} coverImage={coverImage} />
    </Link>
    </li>
)

export default BookCard