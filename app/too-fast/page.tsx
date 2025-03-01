import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  return (
    <main className='root-container flex min-h-screen flex-col items-center justify-center'>
        <h1 className='font-bebas-neue text-5xl font-bold text-light-100'>Whoa, Slow Down There, Speedy</h1>
        <p className='text-center text-light-400 max-w-xl mt-3'>
            Looks like you&apos;ve been navigating too quickly. Please wait a moment before trying again.
        </p>
    </main>
  )
}

export default page