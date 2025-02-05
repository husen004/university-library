import Image from 'next/image'
import React from 'react'

const BookOverview = ({ title, author, genre, rating, totalCopies, availableCopies, description, color, cover }: Book) => {
  return (
    <section className='book-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1 className=''>{title}</h1>

          <div className='book-info'>
            <p>
              By{" "}
              <span className='font-semibold text-light-200'>{author}</span>
            </p>

            <p>
              Category{" "}
              <span className='font-semibold text-light-200'>{genre}</span>
            </p>

            <div className='flex flex-row gap-1'>
              <Image src="/icons/star.svg" alt="start" width={22} height={22} />
              <p className=''>{rating}</p>
            </div>

            <div className='book-copies'>
              <p>Total Books: <span>{totalCopies}</span></p>
              <p>Available Books: <span>{availableCopies}</span></p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default BookOverview