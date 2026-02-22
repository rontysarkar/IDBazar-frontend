import { Button } from '@/components/ui/button';
import PaginationRange from '@/lib/PaginationRange';
import { current } from '@reduxjs/toolkit';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

interface PaginationProps{
    currentPage:number;
    totalPage:number;
    handlePageChange:(page:number)=>void;
}

export const Pagination:React.FC<PaginationProps>=({currentPage,totalPage,handlePageChange})=>{
  const pageNumber = PaginationRange(currentPage,totalPage)


  return (
    <div className='flex justify-center items-center gap-2 mt-5'>
      <Button variant='outline' size='icon'
      onClick={()=>handlePageChange(Math.max(1,currentPage-1))}
      disabled={currentPage=== 1}
      >
          <ChevronLeft className='w-3 h-3 md:w-8 md:h-8'/>
      </Button>
      

        {pageNumber.map((page,idx)=>{
        if(page === '...'){
           return <span key={idx}>...</span>
        }

        return <Button key={idx}
        variant={currentPage === page ? 'default' : 'outline'}
        className={`${currentPage == page ? 'bg-emerald-500 text-black hover:bg-emerald-500' :''} w-6 h-6 md:w-8 md:h-8`}
        onClick={()=>handlePageChange(page as number)}
        >
          {page}
        </Button>
      })}

      <Button 
      variant='outline'
      size='icon'
      onClick={()=>handlePageChange(Math.min(totalPage,currentPage+1))}
      disabled={currentPage === totalPage}
      >
        <ChevronRight className='w-4 h-4 md:w-8 md:h-8'/>
      </Button>
    </div>
  )
}
