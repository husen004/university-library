import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { sampleBooks } from '@/constants'

const Home = () => (
  <>
    <BookOverview isLoanedBook={false} {...sampleBooks[0]} />
    <BookList title="Latest" books={sampleBooks} containerClassName="mt-28" />
  </>
)


export default Home