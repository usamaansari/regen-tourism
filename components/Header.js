import React from 'react'
import Image from 'next/image'
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    Square2StackIcon

} from '@heroicons/react/24/solid' //https://unpkg.com/browse/@heroicons/react@2.0.12/24/outline/

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 p-5 md:px-10'>

        <div className='relative flex items-center h-20 cursor-pointer my-auto'>
            <Image 
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit='contain'
            objectPosition='left'
            /> 

        </div>

        <div className='flex items-center md:border-2 rounded-full py-2 mnd:shadow-sm'>

            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search' />
            <MagnifyingGlassIcon className='hidden md:inline-flex h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            



        </div>

        <div className='flex items-center space-x-4 justify-end text-gray-500'>

            <p className='hidden md:inline cursor-pointer'>Become a regenrative host</p>
            <GlobeAltIcon className='h-10 cursor-pointer' />
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full shadow-md  justify-end text-gray-500'>
                <Square2StackIcon  className='h-10'/>
                <UserCircleIcon className='h-10' />
            </div>

        </div>
    </header>
  )
}

export default Header