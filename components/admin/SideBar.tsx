import { adminSideBarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='admin-sidebar'>
        <div className=''>
            <div className='logo'>
                <Image
                src="/icons/admin/logo.svg"
                alt='logo'
                width={37}
                height={37}
                />
                <h1 className=''>BookWise</h1>
            </div>

            <div className='mt-10 flex flex-col gap-5'>
                {adminSideBarLinks.map((link) => {
                    const isSelected: boolean = false

                    return (
                        <Link href={link.route} key={link.route}>
                            <div className={cn("link", isSelected && "bg-primary-admin shadow-sm")}>
                                <div className='relative size-5'>
                                    <Image src={link.img} alt='link-icon' width={30} height={30}/>
                                    <p className=''>{link.text}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SideBar