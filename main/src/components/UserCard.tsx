import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow min-w-[130px] flex-1 p-4'>
        <div className='flex justify-between items-center '>
            <span className='text-[10px] text-green-600 bg-white rounded-full py-1 px-2'>2024/25</span>
            <Image src='/more.png' alt='' height={20} width={20}/>
        </div>
        <h1 className='text-2xl font-semibold my-4'>1,234</h1>
        <h2 className='capitalize text-sm text-gray-500 font-medium'>{type}</h2>
    </div>
  )
}

export default UserCard