import { Facebook, Instagram, Twitter, X, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pb-10 mt-4">
      <div className="max-w-7xl mx-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm ">
        <div>
          <h4 className="font-bold mb-2">IDBazar</h4>
          <p className="text-slate-600">ডিজিটাল ট্রেডিং জন্য নিরাপদ মার্কেটপ্লেস।</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">সহায়তা</h4>
          <ul className="space-y-1 text-slate-700">
            {/* <li><Link href="#" className="hover:text-slate-900">Help Center</Link></li> */}
            <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            {/* <li><Link href="#" className="hover:text-slate-900">Report/Dispute</Link></li> */}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">লিগ্যাল</h4>
          <ul className="space-y-1 text-slate-700">
            <li><Link href="/terms-conditions" className="hover:text-slate-900">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 ">আমাদের সাথে যুক্ত থাকুন</h4>
          <div className='flex space-x-4'>
            <Link href='#' className=''>
              <Facebook className='w-6 h-6 p-0.5 bg-black rounded-full text-white ' />
            </Link>
            <Link href='#' className=''>
              <Youtube className='w-6 h-6 p-1 bg-black rounded-full text-white ' />
            </Link>
            <Link href='#' className=''>
              <X className='w-6 h-6 p-0.5 bg-black rounded-full text-white ' />
            </Link>
            <Link href='#' className=''>
              <Instagram className='w-6 h-6 p-1 bg-black rounded-full text-white ' />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 text-slate-500 text-sm border-t ">
        © 2025 IDBazar — Only digital trading. Game publishers are not involved.
      </div>
    </footer>
  )
}

export default footer