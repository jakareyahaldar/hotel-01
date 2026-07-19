"use client"

import { faBars, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from "../../public/logo.png"
import { getIsMenu } from '@/context/SideMenuContext'

export default function Navbar(){

    const [,ChengeMenu] = getIsMenu()

    return (
        <header className='h-10 p-10 px-20 w-dvw flex justify-between fixed z-50 text-white'>
            <div className='flex gap-4 items-center'>
                <FontAwesomeIcon onClick={ChengeMenu} icon={faBars} style={{ width: "14px" }} />
                <button className='hover:underline'>Book Now</button>
            </div>
            <Image
                src={logo} 
                className='absolute right-10 md:right-auto top-3 md:top-10 md:left-1/2 md:-translate-1/2 h-14 w-14'
                alt='jjj' />

            <div className='hidden md:flex gap-4 items-center'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faLock} style={{ width: "14px" }} />
                    <button className='hover:underline'>Login</button>
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faPhone} style={{ width: "14px" }} />
                    <button className='hover:underline'>+8801595602938</button>
                </div>
            </div>

        </header>
    )
}