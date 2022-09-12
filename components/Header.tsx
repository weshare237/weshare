import Image from 'next/image'
import React from 'react'

import { FaSearch, FaFlag, FaSlideshare, FaBell } from 'react-icons/fa'
import HeaderIcon from './HeaderIcon'
import { ImHome } from 'react-icons/im'
import { BsCollectionPlayFill, BsFillChatDotsFill } from 'react-icons/bs'
import { MdShoppingCart } from 'react-icons/md'
import { HiUserGroup, HiViewGrid } from 'react-icons/hi'
import { IoChevronDownCircleSharp } from 'react-icons/io5'
import { useSession } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()

  return (
    <div className='sticky top-0 z-50 flex w3-theme-d2 items-center p-2 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <FaSlideshare className='h-7 w-7' />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <FaSearch className='h-6 text-gray-600' />
          <input
            className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search Weshare'
          />
        </div>
      </div>

      {/* Center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2 '>
          <HeaderIcon active Icon={ImHome} />
          <HeaderIcon Icon={FaFlag} />
          <HeaderIcon Icon={BsCollectionPlayFill} />
          <HeaderIcon Icon={MdShoppingCart} />
          <HeaderIcon Icon={HiUserGroup} />
        </div>
      </div>
      {/* profile pic */}
      <Image
        className='rounded-full cursor-pointer'
        src={session?.user?.image!}
        width='40'
        height='40'
        layout='fixed'
      />

      {/* Right */}
      <div className='flex items-center md:space-x-2 justify-end'>
        <p className='whitespace-nowrap font-semibold pr-3'>Fopa Duclair</p>
        <HiViewGrid className='icon' />
        <BsFillChatDotsFill className='icon' />
        <FaBell className='icon' />
        <IoChevronDownCircleSharp className='icon' />
      </div>
    </div>
  )
}

export default Header
