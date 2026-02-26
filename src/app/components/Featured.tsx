import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import gameAccounts from '@/data/posts.json'

const Featured = () => {


    return (
        <section className="max-w-7xl mx-auto px-4 py-4 pb-10">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">Featured</h2>
                <Link href='/accounts' ><Button className='border' variant='ghost'>আরও দেখুন</Button></Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {gameAccounts.slice(0, 4).map((acc, idx) => (
                    <Link key={idx} href={`/accounts/${acc.slug}`} className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm">
                        <div className="aspect-video bg-slate-100 relative">
                            <Image src={acc.images[0]} width={450} height={230} alt='img' className="w-full h-full object-cover" />
                            <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-emerald-100 border text-emerald-700">{acc.category.name}</span>
                            {/* <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{acc.game}</span> */}
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-lg tracking-tighter">{acc.title}</h3>
                            <div className="text-slate-500 text-sm py-1">Verified Seller • 2 ঘন্টা আগে</div>
                            <div className="text-xl font-extrabold mt-1 text-emerald-700">TK {acc.price}</div>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    )
}

export default Featured

// for push git