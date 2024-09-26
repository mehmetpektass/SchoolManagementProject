import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex p-4 gap-4 flex-col md:flex-row'>
      <div className='w-full lg:w-2/3'>
        <div className='flex items-center justify-between gap-4 flex-wrap'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
        </div>
      </div>
      <div className='w-full lg:w-1/3'>
        r
      </div>
    </div>
  )
}

export default AdminPage