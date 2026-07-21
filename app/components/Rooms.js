import BookNowBtn from "./BookNowBtn"


const image_config = [
    {room: "Royel Suite 01", price_range: "400", alt: "Image 01", path: "/images/room-1.jpg"},
    {room: "Royel Suite 02", price_range: "300", alt: "Image 02", path: "/images/room-2.jpg"},
    {room: "Royel Suite 03", price_range: "200", alt: "Image 03", path: "/images/room-3.jpg"},
    {room: "Royel Suite 04", price_range: "300", alt: "Image 04", path: "/images/room-4.jpg"},
]

export default function Rooms(){
    return(
        <section className=" bg-amber-950 grid md:grid-cols-2">
            
            {image_config.map((image)=>{
                return(
                    <div key={image.alt} className="overflow-hidden relative group">
                        <div className="absolute top-5 left-5 md:top-30 md:left-30 z-10 text-white backdrop-blur-xl p-5 rounded-2xl">
                            <h4 className="md:text-2xl font-bold">{image.price_range} tk</h4>
                            <h2 className="md:text-4xl text-xl font-bold">{image.room}</h2>
                        </div>
                        <BookNowBtn />
                        <img src={image.path} className="w-full hover:scale-125 transition" />
                    </div>
                )
            })}

        </section>
    )
}




