import { auth } from '@/auth'
import Header from '@/components/Header'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout = async ({ children }: {children: ReactNode}) => {
  const session = await auth()

  if(!session) redirect("/sign-in")

  return (
    <main className='root-container'>
        <div className='mx-auto max-w-7xl'>
            <Header session={session} />
        {children}
        </div>
    </main>
  )
}

export default layout