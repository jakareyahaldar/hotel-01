"use client"

import { BugIcon } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

export default function BookNowButtonRed(){

    function pushNotify (){
        toast.custom((t) => (
            <div className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-lg`}>
                <div className="flex-1 flex items-center gap-5 w-0 p-4 text-black ">
                    <BugIcon />
                    Online Resarvation not avleable please contact for booking
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                    Close
                    </button>
                </div>
            </div>
        ))
    }


    return(
        <>
            <Toaster  />
            <button  onClick={pushNotify } className="mt-6 w-full bg-red-700 py-4 font-semibold text-white transition hover:bg-red-800">
              BOOK NOW
            </button>
        </>
    )
}

// ()=> toast.error("Online Resarvation not avleable please contact for booking.")