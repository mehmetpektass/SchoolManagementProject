"use client"
import { ITEM_PER_PAGE } from '@/lib/settings'
import { useRouter } from 'next/navigation';

import React from 'react'

const Pagination = ({count, page} : {count:number, page:number}) => {

  const router = useRouter();

  const hasPrev = ITEM_PER_PAGE * (page-1) > 0;
  const hasNext = ITEM_PER_PAGE * (page-1) + ITEM_PER_PAGE < count

  const changePage = (newPage:number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page" , newPage.toString());
    router.push(`${window.location.pathname}?${params}`)
  }

  return (
    <div className='flex justify-between'>
        <button onClick={() => changePage(page-1)} disabled={!hasPrev} className='py-2 px-4 mt-4 rounded-md bg-slate-200 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50'>Prev</button>
        <div className='flex items-center justify-center gap-2'>
          {Array.from({length:Math.ceil(count/ITEM_PER_PAGE)},
           (_,index) => {
            const pageIndex = index + 1;
            return (
              <button onClick={()=>changePage(pageIndex)} key={pageIndex} className={`px-2 rounded-md ${page === pageIndex ? "bg-lamaSky" : ""}`}>{pageIndex}</button>
            )
          })}
        </div>
        <button onClick={() => changePage(page+1)} disabled={!hasNext} className='py-2 px-4 mt-4 rounded-md bg-slate-200 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50'>Next</button>
    </div>
  )
}

export default Pagination