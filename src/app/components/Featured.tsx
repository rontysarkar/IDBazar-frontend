import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const gameAccounts = [
    {
        name: "eFootball 2024 — Elite Division | Epic Players",
        game: "eFootball",
        src: "https://i.ibb.co.com/vv67mjRv/524613976-24153902140940135-5850255138136928430-n.jpg",
        price: 1500,
    },
    {
        name: "PUBG Mobile — Conqueror Rank | Mythic Outfit",
        game: "PUBG",
        src: "https://i.ibb.co.com/wHBvqyB/Screenshot-23.png",
        price: 6000,
    },
    {
        name: "Free Fire Max — 65 Level | Rare Skins",
        game: "Free Fire",
        src: "https://i.ibb.co.com/hFdTYjVN/Screenshot-24.png",
        price: 35,
    },
    {
        name: "Clash of Clans — TH13 Max | 6 Builders",
        game: "Clash of Clan",
        src: "https://i.ibb.co.com/Nn1xvyxG/Screenshot-25.png",
        price: 80,

    },
    {
        name: "FIFA Mobile — OVR 120 | Legendary Team",
        game: "Fifa Mobile",
        src: "https://i.ibb.co.com/FbfHsD61/Screenshot-27.png",
        price: 500,
    },
    {
        name: "Clash Royale — King Level 14 | Max Cards",
        game: "Clash Royale",
        src: "https://i.ibb.co.com/xSPF3kWw/Screenshot-26.png",
        price: 400,
    },
];

const Featured = () => {


    return (
        <section className="max-w-7xl mx-auto px-4 py-4 pb-10">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">Featured</h2>
                <Link href='g' ><Button className='border' variant='ghost'>আরও দেখুন</Button></Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {gameAccounts.slice(0, 4).map((acc, idx) => (
                    <Link key={idx} href='#' className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm">
                        <div className="aspect-video bg-slate-100 relative">
                            <Image src={acc.src} width={450} height={230} alt='img' className="w-full h-full object-cover" />
                            <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-emerald-100 border text-emerald-700">{acc.game}</span>
                            {/* <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{acc.game}</span> */}
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-lg tracking-tighter">{acc.name}</h3>
                            <div className="text-slate-500 text-sm py-1">Verified Seller • 2 ঘন্টা আগে</div>
                            <div className="text-xl font-extrabold mt-1">৳ {acc.price}</div>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    )
}

export default Featured

// for push git