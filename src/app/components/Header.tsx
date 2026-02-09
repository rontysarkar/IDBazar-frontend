import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <header className='border-b bg-white sticky top-0 z-50'>
      {/* desktop header */}
      <div className='container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4'>
        <Link href='/' className='flex itmes-center'>
          <h1 className='text-3xl font-semibold'>Bazar <span className='text-red-700'>Point</span></h1>
        </Link>
        <div className='flex flex-1 itmes-center justify-center max-w-xl px-4 '>
          <div className='relative w-full '>
            <Input
              type='text'
              placeholder='Products Name'
              className='w-full pr-10'
            />
            <Button
              size='icon'
              variant='ghost'
              className='absolute right-0 top-1/2 -translate-1/2'
            >
              <Search/>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header