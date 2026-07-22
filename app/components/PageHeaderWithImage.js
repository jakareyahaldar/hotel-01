"use client"

import { useEffect, useState } from "react";
import {AnimatePresence, motion} from "framer-motion"



const image_config = [
    {
        name: "night view",
        path: 'https://res.cloudinary.com/b3knhi8f/image/upload/v1784715507/561339712_122124380954966799_4798082669804800009_n_drlyot.jpg'
    },
    {
        name: "reciption",
        path: 'https://res.cloudinary.com/b3knhi8f/image/upload/v1784715506/550355148_122119732010966799_480650542691936709_n_g1neph.jpg'
    },
    {
        name: "bath",
        path: 'https://res.cloudinary.com/b3knhi8f/image/upload/v1784715509/587155482_122131391258966799_2591914371173112810_n_pqdce9.jpg'
    },
    {
        name: "tarris",
        path: 'https://res.cloudinary.com/b3knhi8f/image/upload/v1784715518/596634882_122134192370966799_3099785312354654093_n_yqnr1f.jpg'
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