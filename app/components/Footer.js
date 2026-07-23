export default function Footer(){
    return(
        <footer className="w-full md:px-40 pt-20 pb-10 bg-black text-white ">

            <div className="grid md:grid-cols-4 text-center md:text-start justify-center gap-8">

                <div>
                <h4 className="mb-6 uppercase font-bold">Our Address</h4>
                <ul className="opacity-90">
                    <li className="font-bold">Grand Place Dhaka</li>
                    <li>22 Kakrail Road, Dhaka-1000,<br/> Bangladesh.</li>
                </ul>
            </div>
            <div>
                <h4 className="mb-6 uppercase font-bold">Reservation</h4>
                <ul className="opacity-90">
                    <li>Bagerhat</li>
                    <li>+880154646464</li>
                    <li>+880154646464</li>
                </ul>
            </div>
            <div>
                <h4 className="mb-6 uppercase font-bold">News letter</h4>
                <ul className="opacity-90">
                    <li>Bagerhat</li>
                    <li>prothom alo bd</li>
                    <li>news letter</li>
                </ul>
            </div>
            <div>
                <h4 className="mb-6 uppercase font-bold">Our Companies</h4>
                <ul className="opacity-90">
                    <li>Campain 01</li>
                    <li>Campain 02</li>
                </ul>
            </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 justify-between mt-10 text-sm opacity-75">
                <p >&copy; 2025 Grand Palace Hotel & Resorts - by Aco Infosys</p>
                <nav className=" flex gap-5">
                    <a className="hover:underline" href="/">Home</a>
                    <a className="hover:underline" href="/rooms">Our Rooms</a>
                    <a className="hover:underline" href="/about-us">About us</a>
                    <a className="hover:underline" href="/contact">Contact</a>
                </nav>
            </div>

        </footer>
    )
}