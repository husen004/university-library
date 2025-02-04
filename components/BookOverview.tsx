import React from 'react'

const BookOverview = ({ title, author, genre, rating, total, total_copies, available_copies, description, color, cover }: Book) => {
  return (
    <section className='book-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1 className=''>{title}</h1>
        </div>
    </section>
  )
}

export default BookOverview