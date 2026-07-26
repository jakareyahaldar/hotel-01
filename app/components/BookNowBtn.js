"use client"

import { useRouter } from "next/navigation"

export default function BookNowBtn({path}){

    const router = useRouter()

    return <button onClick={()=> router.push("/rooms/"+path) } 
    className="absolute bottom-10 md:left-30 left-5 md:text-3xl font-bold text-white z-10 opacity-0 group-hover:opacity-100 transition-[3s] px-5 py-3 rounded-xl backdrop-blur-xl"
    > Book Now</button>
}