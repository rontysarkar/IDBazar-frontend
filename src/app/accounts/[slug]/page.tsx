'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import postsData from "@/data/posts.json";

const page = () => {
  const {slug} = useParams()
  const post = postsData.find((p)=>p.slug === slug);
  console.log(post)
  return (
    <section className='min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-white'>
      <div className='max-w-7xl mx-auto px-1 md:px-4 md:pt-1 h-80'>
        <nav className='mt-4 p-1 flex gap-2 items-center text-gray-500'>
          <Link href='/'>
          <p className='text-sm'>Home</p>
          </Link>
          <span>{'>'}</span>
          <Link href='/accounts'>
          <p className='text-sm'>Accounts</p>
          </Link>
          <span>{'>'}</span>
          <Link href={`/accounts/${slug}`}>
          <p className='text-sm'>{slug}</p>
          </Link>
        </nav>
        <div className='bg-white h-80'>
         <div>
          <h1>{post?.title}</h1>
          <p>{post?.createdAt}</p>
         </div>
        </div>
      </div>
    </section>
  )
}

export default page