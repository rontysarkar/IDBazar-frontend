"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ChevronRight, Lock, Search, User } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'




const header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const user = {
    userPicture: '',
    name: '',
    email: '',
  }
  const userPlaceholder = '';

  const handleLogin = () => { }
  const handleProtectionNavigation = () => { }


  const menuItems = [
    ...(user && user ? [
      {
        href: "account/profile",
        content: (
          <div className='flex space-x-4 items-center p-2 border-b'>
            <Avatar>
              {user?.userPicture ? (
                <AvatarImage className='w-10 h-10 rounded-full' src="https://github.com/shadcn.png" alt='user image' />
              ) : (
                <AvatarFallback className='text-black'>{userPlaceholder}</AvatarFallback>
              )
              }
            </Avatar>
            <div className='flex flex-col'>
              <span className='font-semibold text-md'>
                {user?.name}
              </span>
              <span className='text-sx text-gray-900'>
                {user?.email}
              </span>
            </div>
          </div>
        )
      }
    ] : [
      {
        icon: <User className='h-5 w-5' />,
        Lable: "My Profile",
        onClick: handleProtectionNavigation,
      }
    ]),
    {
      icon: <Lock className='h-5 w-5' />,
      Lable: "Login/Sign up",
      onClick: handleLogin,
    },
    {
      icon: <Lock className='h-5 w-5' />,
      Lable: "My Orders",
      onClick: handleLogin,
    },
    {
      icon: <Lock className='h-5 w-5' />,
      Lable: "My Selling Orders",
      onClick: handleLogin,
    },
    {
      icon: <Lock className='h-5 w-5' />,
      Lable: "Cart",
      onClick: handleLogin,
    },
    {
      icon: <Lock className='h-5 w-5' />,
      Lable: "Wishlist",
      onClick: handleLogin,
    },
    {
      icon: <Lock className='h-5 w-5' />,
      Lable: "About Us",
      onClick: handleLogin,
    },

  ]

  console.log(menuItems)

  const MenuItems = ({ className = '' }) => (
    <div className={className}>
      {menuItems?.map((item, idx) =>
        item?.href ? (
          <Link key={idx} href={item.href} className='flex items-center w-full gap-4 px-4 py-3 rounded-lg hover:bg-gray-200' onClick={() => setIsDropdownOpen(false)}>
            {item?.icon}
            <span>{item?.Lable}</span>
            {item?.content && <div className='mt-2'>{item.content}</div>}
          </Link>
        ) : (
          <button key={idx}
            className='flex items-center w-full gap-4 px-4 py-3 rounded-lg hover:bg-gray-200'
            onClick={item.onClick}>
            {item?.icon}
            <span>{item?.Lable}</span>
            <ChevronRight className='w-4 h-4 ml-auto' />
          </button>
        )
      )}
    </div>
  )

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
              <Search />
            </Button>
          </div>
        </div>
        <div className='flex itmes-center gap-4'>
          <Link href="/sell-product">
            <Button className='bg-yellow-400 text-gray-600 hover:bg-yellow-500'>
              Sell Products
            </Button>
          </Link>
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen} >
            <DropdownMenuTrigger asChild>
              <Button variant='ghost'>
                <Avatar>
                  {user?.userPicture ? (
                    <AvatarImage className='w-8 h-8 rounded-full' src="https://github.com/shadcn.png" alt='user image' />
                  ) : userPlaceholder ? (
                    <AvatarFallback className='text-black'>{userPlaceholder}</AvatarFallback>
                  ) : (
                    <User className='ml-2 mt-2' />
                  )
                  }
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {<MenuItems />}
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  )
}

export default header