import React from 'react'

const Pagination = () => {
  return (
    <div>
        <button className='py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50'>Prev</button>
        <div className='flex items-center justify-center gap-2'>
            <button className='px-2 rounded-md bg-lamaSky'>1</button>
            <button className='px-2 rounded-md'>2</button>
            <button className='px-2 rounded-md'>3</button>
            ...
            <button className='px-2 rounded-md'>10</button>
        </div>
    </div>
  )
}

export default Pagination