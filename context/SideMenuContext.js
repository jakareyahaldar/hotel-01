"use client"

import {  createContext, useContext, useState } from "react";

const context = createContext()


export function getIsMenu(){
    const data = useContext(context)
    return data
}

export default function SideMenuContextProvider({children}){
    const [isMenu, setIsMenu] = useState(false)

    function toggleMenu(){
        setIsMenu(!isMenu)
    }

    return <context.Provider value={[isMenu, toggleMenu]}>{children}</context.Provider>

}