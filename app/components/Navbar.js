"use client"

import { faBars, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from "../../public/logo.png"
import { getIsMenu } from '@/context/SideMenuContext'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react'

export default function Navbar(){
    const pathname = usePathname()
    const router = useRouter()
    const [isHeroVisible, setHeroVisible] = useState(true)
    const [,ChengeMenu] = getIsMenu()


    function HandleLoginButton(){
        toast.error("Login feature not devloped yet.")
    }

    useEffect(()=>{
        if(!window) return
        const hero = document.querySelector("#hero")
        if(!hero){
            setHeroVisible(false)
            return
        }
        const observer = new IntersectionObserver(([entry])=>{
            setHeroVisible(entry.isIntersecting)
        })
        observer.observe(hero)

        return ()=> observer.disconnect()
    },[pathname])



    return (
        <header className={`${!isHeroVisible ? "bg-amber-950" : ""} transition-all h-10 p-10 px-20 w-dvw flex justify-between fixed z-50 text-white`}>
            <Toaster />
            <div className='flex gap-4 items-center'>
                <FontAwesomeIcon onClick={ChengeMenu} icon={faBars} style={{ width: "14px" }} />
                <button onClick={()=> router.push("/search-room") } className='hover:underline'>Book Now</button>
            </div>
            <Image
                src={logo} 
                className={` absolute right-10 md:right-auto top-1 md:left-1/2 md:-translate-1/2 ${!isHeroVisible ? "w-[60px] h-[60px] top-1 md:top-9" : "md:h-[100px] md:w-[100px] h-[70px] w-[70px] md:top-[60px]" }`}
                alt='Brand Logo' />

            <div className='hidden md:flex gap-4 items-center'>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faLock} style={{ width: "14px" }} />
                    <button onClick={HandleLoginButton} className='hover:underline'>Login</button>
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faPhone} style={{ width: "14px" }} />
                    <Link className='hover:underline' href={"tel:+8801322607171"} >+8801322-607171</Link>
                </div>
            </div>

        </header>
    )
}