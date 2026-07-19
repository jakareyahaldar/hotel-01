"use client"


import  Link  from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { getIsMenu } from "@/context/SideMenuContext";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";


const nav_config = [

    { path: "/", name: "Home" },
    { path: "/rooms", name: "Our Rooms" },
    { path: "/bar", name: "Restaurants & Bar" },
    { path: "/about", name: "About Us" },
    { path: "/gallary", name: "Gallery" },
    { path: "/contact", name: "Contact" },
    { path: "/tac", name: "Terms and Conditions" },
]


export default function SideBar(){

    const pathName = usePathname()

    const [isMenu, ChengeIsMenu] = getIsMenu()

    if(!isMenu) return null

    return(
        <motion.div
        initial={{ x: -100, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        className="h-dvh w-[300px] md:w-[400px] bg-amber-400 fixed z-[100] flex justify-center items-center">
            <FontAwesomeIcon onClick={ChengeIsMenu} className="absolute top-10 right-10  rounded-full hover:text-blue-600 hover:scale-125" icon={faXmark} style={{ width: "14px", height: "14px" }} />
            <nav className="flex flex-col gap-5 text-xl font-bold">
                {nav_config.map( item => <Link key={item.path} className={`${pathName === item.path && "underline"} hover:underline underline-offset-2`} href={item.path}>{item.name}</Link> )}
            </nav>
        </motion.div>
    )
}




