import About from "./components/CardWithImageAndText";
import BookingSearch from "./components/BookingSearch";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import VideoComponent from "./components/VideoComponent";


export default function Home() {
  return(
    <main>
      <Hero />
      <BookingSearch />
      <Rooms />
      <About />
      <VideoComponent />
    </main>
  )
}
