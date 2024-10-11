import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/*Search Bar */}
        <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 hover:ring-2'>
            <Image src='/search.png' alt='' width={14} height={14}/>
            <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none ' />
        </div>
        {/*Icons and user */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src='/message.png' alt='' height={20} width={20}/>
            </div>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                <Image src='/announcement.png' alt='' height={20} width={20}/>
                <div className='absolute -top-3 -right-3 w-5 h-5 bg-purple-500 flex items-center justify-center text-white text-xs rounded-full'>1</div>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-3 font-medium'>Alan Doe</span>
                <span className='text-[10px] text-right text-gray-500'>Admin</span>
            </div>
            <div>
               <UserButton/>
            </div>
        </div>
    </div>
  )
}

export default Navbar