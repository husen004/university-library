import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({ children }: {children: ReactNode}) => {
  return (
    <main className='root-container'>
        <div className='mx-auto max-w-7xl'>
            <Header />
        {children}
        </div>
    </main>
  )
}

export default layout