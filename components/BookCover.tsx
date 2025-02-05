import React from 'react'

interface Props {
    className?: string
    variant: 'wide' | 'small'
    coverColor: string
    coverImage: string
}

const BookCover = ({ variant, className, coverColor, coverImage }: Props) => {
  return (
    <div>BookCover</div>
  )
}

export default BookCover