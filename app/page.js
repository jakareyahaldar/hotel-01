import About from "./components/About";
import BookingSearch from "./components/BookingSearch";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";


export default function Home() {
  return(
    <main>
      <Hero />
      <BookingSearch />
      <Rooms />
      <About />
    </main>
  )
}
