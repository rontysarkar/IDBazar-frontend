import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const categories = [
    {
        name: 'Pubg Mobile',
        src: '/images/pubg.jpg'
    },
    {
        name: 'eFootball',
        src: '/images/efootball.jpg'
    },
    {
        name: 'Free Fire',
        src: '/images/fireefire.jpg'
    },
    {
        name: 'Clash of Clan',
        src: '/images/coc.jpg'
    }
    ,{
        name: 'Clash Royale',
        src: '/images/clashroyal.jpg'
    },
    ,{
        name: 'Fifa Mobile',
        src: '/images/fifa.jpg'
    },
    
]

const Categories = () => {
    return (
        <section className='max-w-7xl mx-auto px-4 py-4'>
            <div className='flex justify-between items-center mb-4'>
                <h1>ক্যাটাগরি ব্রাউজ করুন</h1>
                <Link href='#' ><Button className='border' variant='ghost'>আরও দেখুন</Button></Link>
            </div>
            <div className='grid sm:grid-cols-3 lg:grid-cols-6 gap-3  '>

                {categories.map((cate, idx) => (
                    <div key={idx} className=' border border-slate-200 bg-white hover:shadow rounded-xl p-3 '>
                        <Link href='#' className='flex  justify-center items-center gap-4'>
                            <div >
                                <Avatar className='w-12 h-12'>
                                    <AvatarImage className='object-cover' src={cate?.src} />
                                </Avatar>
                            </div>
                            <div className='font-bold '>
                                {cate?.name}
                            </div>
                        </Link>
                    </div>
                ))}


            </div>
        </section>
    )
}

export default Categories