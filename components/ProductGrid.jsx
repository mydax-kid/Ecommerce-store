import Link from 'next/link'
import React from 'react'

export default function ProductGrid() {
    const gridData = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/6547593/pexels-photo-6547593.jpeg?auto=compress&cs=tinysrgb&w=1600',
            collection: 'Male'
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/2733614/pexels-photo-2733614.png?auto=compress&cs=tinysrgb&w=1600',
            collection: 'Female'
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/2062342/pexels-photo-2062342.jpeg?auto=compress&cs=tinysrgb&w=1600',
            collection: 'Urban'
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
            collection: 'New season'
        },
        {
            id: 5,
            img: 'https://images.pexels.com/photos/7659196/pexels-photo-7659196.jpeg?auto=compress&cs=tinysrgb&w=1600',
            collection: 'Vintage'
        },
        {
            id: 6,
            img: 'https://images.pexels.com/photos/18012375/pexels-photo-18012375/free-photo-of-silhouette-of-woman-in-hat-dancing-on-blue-background.jpeg?auto=compress&cs=tinysrgb&w=1600',
            collection: 'Winter'
        },
    ]


  return (
        <div className='grid gap-1.5 grid-cols-4 grid-rows-2 h-[700px]'>
            {
                gridData.map(item => (
                    <Link href={`/products/${item.id}?collection=${item.collection}`} className={`grid-${item.id}`}>
                        <div className='w-full h-full relative'>
                            <img src= {item.img} alt="" className='w-full h-full object-cover object-center'/>
                            <span className='absolute py-2 px-4 bg-white text-black text-sm top-[50%] left-0 right-0 mx-auto w-max uppercase font-medium hover:bg-blue-700 hover:text-white'>{item.collection}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    
  )
}
