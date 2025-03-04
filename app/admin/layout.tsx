import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

import "@/styles/admin.css"
import SideBar from '@/components/admin/SideBar'

const layout = async ({ children }: {children: ReactNode}) => {
  const session = await auth()

  if(session?.user?.id) return redirect('/sign-in')
    
  return (
    <main className='flex min-h-screen w-full flex-row'>
      <SideBar />

      <div className='admin-container'>
        <p className=''>Header</p>
        {children}
      </div>
    </main>
  )
}

export default layout