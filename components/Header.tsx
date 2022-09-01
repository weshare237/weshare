import Image from 'next/image'
import React from 'react'

import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
      <div className='flex items-center'>
        <Image src='/fopa.png' width={40} height={40} layout='fixed' />
        <div className='flex'>
          <FaSearch className='h-6' />
          <input type='text' placeholder='Search weshare' />
        </div>
      </div>
    </div>
  )
}

export default Header
