import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-2">IDBazar</h4>
          <p className="text-slate-600">ডিজিটাল গুডসের জন্য নিরাপদ মার্কেটপ্লেস।</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">সহায়তা</h4>
          <ul className="space-y-1 text-slate-700">
            <li><Link href="#" className="hover:text-slate-900">Help Center</Link></li>
            <li><Link href="#" className="hover:text-slate-900">Contact</Link></li>
            <li><Link href="#" className="hover:text-slate-900">Report/Dispute</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">লিগ্যাল</h4>
          <ul className="space-y-1 text-slate-700">
            <li><Link href="#" className="hover:text-slate-900">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-slate-900">Refund Policy</Link></li>
            <li><Link href="#" className="hover:text-slate-900">Disclaimer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">আপডেট নিন</h4>
          <div className="flex gap-2">
            <input placeholder="আপনার ইমেইল" className="border border-slate-200 rounded-lg px-3 py-2 flex-1" />
            <button className="px-3 py-2 rounded-lg bg-slate-900 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 text-slate-500 text-sm border-t">
        © 2025 IDDokaan — Only digital trading. Game publishers are not involved.
      </div>
    </footer>
  )
}

export default footer