import BookingSearch from "../components/BookingSearch";
import PageHeaderWithImage from "../components/PageHeaderWithImage";

export default function SearchRooms(){


    return(
        <section className="">

             <PageHeaderWithImage heading="Book Room" subHeading="Search an room for leaving." />
            <BookingSearch />
        </section>
    )
}