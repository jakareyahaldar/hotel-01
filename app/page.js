
import BookingSearch from "./components/BookingSearch";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import VideoComponent from "./components/VideoComponent";
import CardWithImageAndText from "./components/CardWithImageAndText";



const about_config = [
    {
        title: "A Sanctuary of Refined Comfort & Timeless Hospitality",
        description: `Step into a space designed as your personal haven away from the noise of everyday life. Every room and suite seamlessly blends modern elegance, thoughtful aesthetics, and plush amenities to create an atmosphere of effortless relaxation. Whether you are unwinding after a busy day of exploring, catching up on quiet work, or waking up to peaceful surroundings, our sanctuary is built around your peace of mind. We take pride in delivering attentive, warm service that ensures every moment of your stay feels intuitive, restful, and truly special.`,
        image: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714898/bed-2_wskuva.jpg"
    },
    {
        title: "A Culinary Journey Crafted with Passion & Local Flavor",
        description: `
        Indulge in an elevated dining experience where every dish tells a story of tradition, innovation, and passion. Our kitchen centers around carefully sourced, high-quality ingredients, transforming fresh seasonal produce into vibrant culinary creations. From energizing morning breakfasts and relaxed lunches to sophisticated candlelit dinners, our menu is designed to bring people together over unforgettable tastes. Paired with an inviting ambiance and genuine hospitality, every meal here is more than just dining—it is a celebration of flavor, comfort, and connection.
        `,
        image: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-3_wuzhyx.jpg"
    },
]



export default function Home() {
  return(
    <main>
      <Hero />
      <BookingSearch />
      <Rooms />
      <CardWithImageAndText config={about_config} />
      <VideoComponent />
    </main>
  )
}
