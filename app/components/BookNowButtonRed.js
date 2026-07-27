"use client"

import { useRouter } from "next/navigation"

export default function BookNowButtonRed(){
    const router = useRouter()

    return(
        <>
            <button  onClick={()=> router.push("/search-room")} className="mt-6 z-50 w-full bg-red-700 py-4 font-semibold text-white transition hover:bg-red-800">
              BOOK NOW
            </button>
        </>
    )
}