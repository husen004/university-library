import React from 'react'

const BookOverview = ({ title, author, genre, rating, total, copies, available_copies, description, color, cover }) => {
  return (
    <section className='book-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1 className=''>{title}</h1>
        </div>
    </section>
  )
}

export default BookOverview