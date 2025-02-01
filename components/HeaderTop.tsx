// *********************
// Role of the component: Topbar of the header
// Name of the component: HeaderTop.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <HeaderTop />
// Input parameters: no input parameters
// Output: topbar with phone, email and login and register links
// *********************

'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react' // Import useState for managing dropdown state
import toast from 'react-hot-toast'
import {
  FaArrowRightToBracket,
  FaHeadphones,
  FaRegEnvelope,
  FaRegUser
} from 'react-icons/fa6'

const HeaderTop = () => {
  const { data: session }: any = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false) // State for dropdown visibility

  const handleLogout = () => {
    setTimeout(() => signOut({ callbackUrl: '/login' }), 1000)

    toast.success('Logout successful!')
  }

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev) // Toggle dropdown state

    setTimeout(() => {
      setDropdownOpen(false)
    }, 5000)
  }

  return (
    <div className='h-10 text-white bg-black max-lg:px-5 max-lg:h-16 max-[573px]:px-0'>
      <div className='flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0'>
        <ul className='flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2'>
          {/* <li className="flex items-center gap-x-2 font-semibold">
            <span>Sale Starts Now</span>
          </li>
          <li className="flex items-center gap-x-2 font-semibold">
            <span>00:00:00</span>
          </li> */}
            {/* Add Visitor Counter */}

        </ul>
        <ul className='flex items-center gap-x-5 h-full max-[370px]:text-sm max-[370px]:gap-x-2 font-semibold'>
          {!session ? (
            <>
              <li className='flex items-center'>
                <Link
                  href='/login'
                  className='flex items-center gap-x-2 font-semibold'
                >
                  <FaRegUser className='text-white' />
                  <span>Login</span>
                </Link>
              </li>
              <li className='flex items-center'>
                <Link
                  href='/register'
                  className='flex items-center gap-x-2 font-semibold'
                >
                  <FaRegUser className='text-white' />
                  <span>Register</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <span className='ml-10 text-base'>{session.user?.email}</span>
              {session.user?.role == 'admin' && (
                <span className='ml-2 text-base'>
                  <Link href='/admin'>Admin</Link>
                </span>
              )}
              <div className='relative flex items-center'>
                <button onClick={toggleDropdown} className='flex items-center'>
                  <FaRegUser className='text-white' />
                </button>
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className='absolute right-0 z-10 mt-40 w-48 bg-white text-black rounded-md shadow-lg'>
                    <ul className='py-1'>
                      <li>
                        <Link
                          href='/profile'
                          className='block px-4 py-2 hover:bg-gray-200'
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/orders'
                          className='block px-4 py-2 hover:bg-gray-200'
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <span></span>
                        <button
                          onClick={() => handleLogout()}
                          className='flex items-center text-left px-4 py-2 hover:bg-gray-200'
                        >
                          <FaArrowRightToBracket className='mr-2' />{' '}
                          {/* Add margin to the right of the icon for spacing */}
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </ul>
      </div>




      
    </div>
  )
}

export default HeaderTop
