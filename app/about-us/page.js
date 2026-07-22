import CardWithImageAndText from "../components/CardWithImageAndText";
import PageHeaderWithImage from "../components/PageHeaderWithImage";


const config = [
    {
        title: "Redefining Luxury at [Hotel Name]",
        description: `Welcome to [Hotel Name], where timeless elegance meets modern sophistication. Designed to offer an extraordinary escape from the everyday, our property combines breathtaking architecture, world-class amenities, and impeccable service in the vibrant heart of [City/Location].
        Every guestroom and suite is a masterclass in detail, curated to provide an oasis of calm and refinement. Indulge in exquisite dining at our signature restaurant, unwind at our premier spa, or simply soak in the views.
        At [Hotel Name], luxury isn't just a promise—it’s our passion.`,
        image: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714898/bed-2_wskuva.jpg"
    },
    {
        title: "Hospitality in Harmony with Nature",
        description: `
        At [Hotel Name], we believe that exceptional hospitality and environmental stewardship go hand in hand. Set amidst the natural beauty of [City/Location], our hotel is designed for conscious travelers who value comfort without compromise.
        From energy-efficient design and zero-waste initiatives to farm-to-table dining sourced from local producers, every aspect of [Hotel Name] reflects our commitment to preserving our planet.
        Relax, recharge, and tread lightly.
        `,
        image: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-3_wuzhyx.jpg"
    },
]


export default function AboutUs(){
    return(
        <section>
            <PageHeaderWithImage heading="About us" subHeading="you can read about us." />
            <CardWithImageAndText config={config} />
        </section>
    )
}