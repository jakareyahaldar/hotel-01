import About from "./components/About";
import BookingSearch from "./components/BookingSearch";
import Hero from "./components/Hero";


export default function Home() {
  return(
    <main>
      <Hero />
      <BookingSearch />
      <About />
    </main>
  )
}
