import Image from "next/image";

export default function CardWithImageAndText({config=[]}){
    return(
        <div className="p-10 py-20 md:px-20 lg:px-30 xl:px-90 w-full flex flex-col items-center gap-20 ">
            

            {/*about container*/}
            <div className="w-full grid gap-20">
                {/*ABOUT CARD*/}
                {
                    config?.map((item,index)=>{
                        return(
                            <div key={item.title} className="w-full grid md:grid-cols-2 gap-10  ">
                                <div className={index%2 === 0 ? "order-2" : ""}>
                                    <h3 className="text-4xl mb-10 font-bold">{item?.title}</h3>
                                    <p className="text-xl">{item?.description}</p>
                                </div>
                                <div className="relative min-h-[400px]">
                                    <Image 
                                        src={item.image}
                                        fill={true}
                                        className="object-cover rounded-2xl"
                                        alt="our room"
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}