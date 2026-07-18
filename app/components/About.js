import Image from "next/image";

export default function About(){
    return(
        <div className="p-10 lg:px-96 w-full flex flex-col items-center gap-20 ">
            <h2 className="text-3xl font-bold">About Us</h2>

            {/*about container*/}
            <div className="w-full ">
                {/*ABOUT CARD*/}
                <div className="w-full grid md:grid-cols-2 gap-10  ">
                    <div>
                        <h3 className="text-2xl mb-10 font-bold">Finest Luxury Hotels in Grand Palace</h3>
                        <p className="text-lg">
                            Grand Palace Hotel & Club offers a luxurious retreat in the Dhaka, Rangpur &   Sylhet combining elegance, comfort, and world-class amenities. With opulent accommodations, fine dining options, and top-tier recreational facilities, including a serene open-to-sky swimming pool, a well-equipped gymnasium, and the tranquil Hideaway Spa, it’s the perfect destination for relaxation and leisure. Whether you’re traveling for business or pleasure, Grand Palace Hotel & Club promises an unforgettable experience of luxury and hospitality.
                        </p>
                    </div>
                    <div className="relative min-h-[400px]">
                        <Image 
                            src="/images/about1.jfif"
                            fill={true}
                            className="object-cover"
                            alt="lll"
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}