export default function(){
    return(
        <div className="w-full relative">
            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center">
                <h2 className="md:text-2xl hover:font-bold p-2 border-[1px] uppercase hover:bg-blue-700 hover:scale-110 text-white rounded-md transition">Make an online Reservation</h2>
                <p className="md:text-2xl mt-3 text-white">or +88015634326</p>
            </div>
            <video 
            autoPlay={true} muted loop
            src="https://res.cloudinary.com/b3knhi8f/video/upload/v1784450643/samples/sea-turtle.mp4"></video>
        </div>
    )
}