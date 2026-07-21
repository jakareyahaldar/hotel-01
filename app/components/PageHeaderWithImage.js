"use client"

import { useEffect, useState } from "react";
import {AnimatePresence, motion} from "framer-motion"



const image_config = [
    {
        name: "image-1",
        path: '/images/picture-1.jpg'
    },
    {
        name: "image-2",
        path: '/images/picture-2.jpg'
    },
]
 



export default function PageHeaderWithImage({ heading, subHeading }){
    const [ currIndex, setIndex ] = useState(0)
    
        useEffect(()=>{
            const timer = setInterval(()=>{
                setIndex((prevIndex) => (prevIndex + 1) % image_config.length)
            },6000)
    
            return ()=> clearInterval(timer)
        },[])
     
        return(
                <div className="w-full h-[550px]  relative">
                    <div className="absolute w-full h-full flex flex-col justify-center items-center z-30 text-white bg-[#00000073]">
                        <h3 className="md:text-6xl text-3xl font-bold">{heading}</h3>
                        <br />
                        <h4 className="md:text-2xl text-xl font-bold uppercase">{subHeading}</h4>
                    </div>
                    <AnimatePresence mode="wait">
                    <motion.div 
                        key={currIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        style={{ backgroundImage: `url(${image_config[currIndex].path})` }}
                        className="w-full h-full relative bg-cover bg-center">
                        {/**<div className="h-full w-full bg-[#0504047a] absolute top-0 left-0 z-10"></div>
                        <Image className="object-cover" fill={true} src={image_config[currIndex].path}  alt="Hero image" />*/}
                    </motion.div> 
                    </AnimatePresence>
                </div>
        )
}