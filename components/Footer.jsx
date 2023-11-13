import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='space-y-6 mt-[100px] bg-gray-50 p-6'>
      <div className='flex gap-12'>

        <div className='flex-1'>
          <h2 className='font-medium'>Categories</h2>
          <div className='text-zinc-500 text-sm leading-[24px]'>
            <p>Women</p>
            <p>Men</p>
            <p>Shoes</p>
            <p>Accessories</p>
            <p>New Arrivals</p>
          </div>
        </div>

        <div className='flex-1'>
          <h2 className='font-medium'>Links</h2>
          <div className='text-zinc-500 text-sm leading-[24px]'>
          <p>FAQ</p>
          <p>Pages</p>
          <p>Stores</p>
          <p>Compare</p>
          <p>Cookies</p>
          </div>
        </div>

        <div className='flex-1'>
          <h2 className='font-medium'>About</h2>
          <p className='text-justify text-sm text-zinc-500 leading-[24px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero recusandae ipsam veniam molestiae nostrum? Aliquam, temporibus eos debitis magnam maiores aperiam reprehenderit.
          </p>
        </div>

        <div className='flex-1'>
          <h2 className='font-medium'>Contact</h2>
          <p className='text-justify text-sm text-zinc-500 leading-[24px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero recusandae ipsam veniam molestiae nostrum? Aliquam, temporibus eos debitis magnam maiores aperiam reprehenderit.
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center py-6'>
        <div>
          <h1 className='font-bold text-2xl text-blue-500'>MydaxStore</h1>
        </div>
        <div>
          <Image src='/images/payment.png' width={500} height={200} alt='' />
        </div>
      </div>
    </div>
  )
}
