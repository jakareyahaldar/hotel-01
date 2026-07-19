"use client"

import { useRouter } from "next/navigation"

export default function BookNowBtn(){

    const router = useRouter()

    return <button onClick={()=> router.push("/search-room") } 
    className="absolute bottom-10 left-30 text-3xl font-bold text-white z-10 opacity-0 group-hover:opacity-100 transition-[3s] px-5 py-3 rounded-xl backdrop-blur-xl"
    > Book Now</button>
}