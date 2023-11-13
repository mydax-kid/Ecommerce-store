'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

import { useSelector } from 'react-redux'
import {useState} from 'react'
import Cart from './Cart'


export default function Navbar() {
  const [openCart, setOpenCart] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className='flex items-center p-4 py-6 bg-slate-50 relative'>
      <div className='flex justify-between items-center gap-4 font-medium w-1/3'>
        <div className='relative flex justify-between items-center'>
          <Image src= '/images/en.png' alt='' width={20} height={20} />
          <IoIosArrowDown/>
        </div>
        <div className='flex items-center justify-between'>
          <h1>USD</h1>
          <IoIosArrowDown/>
        </div>
        <Link href='/products/1'>
          <h2>Men</h2>
        </Link>
        <Link href='/products/2'>
          <h2>Women</h2>
        </Link>
        <Link href='/products/4'>
          <h2>New Season</h2>
        </Link>
        <Link href='/products/5'>
          <h2>Vintage</h2>
        </Link>
      </div>

      <div className='font-medium w-1/3 text-center'>
        <Link href='/'>
          MYDAXSTORE
        </Link>
      </div>

      <nav className='w-1/3'>
        <ul className='flex justify-between items-center gap-4 font-medium'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/'>
            <li>About</li>
          </Link>
          <Link href='/'>
            <li>Contact</li>
          </Link>
          <Link href='/'>
            <li>Stores</li>
          </Link>
          <Link href='/'>
            <li><AiOutlineSearch size={20}/></li>
          </Link>
          <Link href='/'>
            <li><BsPerson size={20}/></li>
          </Link>
          <Link href='/'>
            <li><AiOutlineHeart size={20}/></li>
          </Link>
          <div>
            <li onClick={() => setOpenCart(!openCart)} className='flex items-center relative cursor-pointer'>
              <BsCart2 size={20} />
              <span className=' p-0.5 rounded-full w-[20px] h-[20px] flex justify-center text-[13px] items-center bg-blue-400 absolute top-[-10px] right-[-10px]'>    {products.length}
              </span>
            </li>
          </div>
        </ul>
      </nav>

      {openCart && <Cart/>}
    </div>
  )
}
