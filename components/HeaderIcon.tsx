import React from 'react'
import { IconType } from 'react-icons'

interface Props {
  Icon: IconType
  active?: boolean
}

const HeaderIcon: React.FC<Props> = ({ Icon, active }) => {
  return (
    <div className='flex items-center group cursor-pointer md:px-10 sm:h-14   active:border-b-2 active:border-blue-500 hover:md:text-black hover:md:bg-white'>
      <Icon
        className={`h-5 text-center sm:h-7 mx-auto ${
          active && 'text-green-300'
        }`}
      />
    </div>
  )
}

export default HeaderIcon
