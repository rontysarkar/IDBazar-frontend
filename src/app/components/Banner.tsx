import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Banner = () => {
    return (
        <section className=" overflow-hidden">
            <div className="  bg-gradient-to-br from-emerald-50 to via-sky-50 to-white">
                <div className="max-w-7xl mx-auto px-4 py-6 md:py-12  relative">
                    <div className="grid md:grid-cols-2 gap-8 itmes-center">
                        <div className='p-4 md:p-0'>
                            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                                নিরাপদে গেমিং অ্যাকাউন্ট ও ডিজিটাল আইটেম বেচা-কেনা করুন
                            </h1>
                            <p className="text-slate-600 mt-2">
                                Escrow এর মাধ্যমে Admin আপনার পেমেন্ট ধরে রাখবে, Seller ডেলিভারি দিলে Buyer নিশ্চিত করলেই Seller payout পাব
                            </p>
                            <div className='mt-4 p-4 bg-white rounded-xl'>
                                <div className='relative w-full '>
                                    <Input
                                        type='text'
                                        placeholder='সব গেম : Efootball,Pubg ,Free fire '
                                        className='w-full pr-10 py-5 rounded-full hidden lg:flex'
                                    />
                                    <Input
                                        type='text'
                                        placeholder=' সব গেম...  '
                                        className='w-full pr-10 py-5 rounded-full lg:hidden'
                                    />
                                    <Button
                                        size='icon'
                                        variant='ghost'
                                        className='absolute right-0 top-1/2 -translate-1/2'
                                    >
                                        <Search />
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3 text-sm">
                                    <span className="text-slate-500 mt-1">Trending:</span>
                                    <Button variant='ghost' className="border border-slate-200 hover:border-slate-500 rounded-full ">Efootball</Button>
                                    <Button variant='ghost' className="border border-slate-200 hover:border-slate-500 rounded-full">Pubg</Button>
                                    <Button variant='ghost' className="border border-slate-200 hover:border-slate-500 rounded-full">Free Fire</Button>
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-200 p-4 rounded-2xl shadow-sm bg-white flex flex-col justify-center items-center">
                            <div>
                                <h1 className="font-bold mb-3">কিভাবে কাজ করে?</h1>
                                <ol className="space-y-2 mb-3">
                                    <li>1) Seller Ad পোস্ট করে • Buyer চ্যাটে ডিল ফাইনাল করে</li>
                                    <li>2) Buyer → Admin (Escrow) এ পেমেন্ট পাঠায়</li>
                                    <li>3) Admin টাকা হোল্ড করে • Seller ডেলিভারি দেয়</li>
                                    <li>4) Buyer সফল লগইন/চেঞ্জ কনফার্ম করে</li>
                                    <li>5) Admin Seller-কে পেমেন্ট রিলিজ করে</li>
                                </ol>
                                <div className="mt-2 p-3 rounded-lg bg-emerald-50 text-emerald-900 text-sm">
                                    নোট: কোনো ফিজিকাল পণ্য নয়—শুধুমাত্র ডিজিটাল ট্রেড
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner