import React from 'react'

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide"

const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra-small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
}

interface Props {
    className?: string
    variant: BookCoverVariant,
    coverColor: string
    coverImage: string
}

const BookCover = ({ variant, className, coverColor, coverImage }: Props) => {
  return (
    <div>

    </div>
  )
}

export default BookCover