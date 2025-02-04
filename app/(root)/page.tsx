import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => (
  <>
    <BookOverview />
    <BookList />
  </>
)

export default Home