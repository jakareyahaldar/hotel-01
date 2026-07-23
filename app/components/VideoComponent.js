import Magnet from "@/AnimationComponent/Magnet";


export default function(){
    return(
        <div className="w-full relative">
            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center">
                <Magnet padding={100} disabled={false} magnetStrength={2}>
                    <p className="p-4 border-[1px] rounded-md uppercase border-blue-600 text-white md:text-2xl backdrop-blur-sm">Make an online Reservation!</p>
                </Magnet>
                <p className="md:text-2xl mt-3 text-white">or +88015634326</p>
            </div>
            <video 
            className="w-full"
            autoPlay={true} muted loop
            src="https://res.cloudinary.com/b3knhi8f/video/upload/v1784716897/AQMolaIDHrjvg9HVCD2pV5cClDYJxEf5UZwPKj-4ZFeamIBzEfQbOkyxvQmmRLBTVUZ6yGtXIuXkKmLaWpQUxvz0bT9fEyeoZ5vGI9AInwRXcw_l1zfn4.mp4"></video>
        </div>
    )
}