'use client'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const Accounts = () => {
    const [currentGame, setCurrentGame] = useState('All Game')

    const game = [
        { name: "All Game" }, { name: "Pubg" }, { name: "Efootball" }, { name: "Clash of Clan" }, { name: "Free Fire" }
    ]
    return (
        <section className='bg-gradient-to-br from-emerald-50 to via-sky-50 to-white'>
            <div className='max-w-7xl mx-auto px-4 py-6 '>
                <div className='mt-4 p-6 bg-white rounded-lg'>
                    <div className='relative'>
                        <Input
                            className='py-6'
                            placeholder=' সব গেম : Efootball,Pubg ,Free fire '
                        />
                        <Button
                            variant='default'
                            className='absolute right-0 top-1/2 -translate-1/2 bg-emerald-500 hover:bg-emerald-700 rounded-full'
                        >
                            <Search className='w-10 h-10' />
                        </Button>
                    </div>
                    <div className='mt-4'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{currentGame}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="start">
                                <DropdownMenuGroup>
                                    {game.map((g) => (
                                        <DropdownMenuItem onClick={() => {
                                            setCurrentGame(g.name)
                                        }}>
                                            {g.name}
                                        </DropdownMenuItem>
                                    ))}


                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accounts