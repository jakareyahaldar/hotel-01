import HotelConditions from "../components/HotelConditions";
import PageHeaderWithImage from "../components/PageHeaderWithImage";

export default function Conditions(){
    return(
        <section>
            <PageHeaderWithImage heading="Conditions" subHeading="Hear those conditions of our Hotel." />
            <HotelConditions />
        </section>
    )
}