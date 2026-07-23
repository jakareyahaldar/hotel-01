import CardWithImageAndText from "../components/CardWithImageAndText";
import PageHeaderWithImage from "../components/PageHeaderWithImage";


const config = [
    {
        title: "Exceptional Dining & Culinary Artistry",
        description: "Savor an extraordinary culinary journey. Our restaurant celebrates rich flavors and fresh, locally sourced ingredients, thoughtfully transformed into dishes that blend time-honored traditional recipes with contemporary culinary techniques. From vibrant, energizing morning breakfasts to intimate, multi-course evening dinners, every meal is designed to be a feast for the senses. Whether you are enjoying a casual meal with family or celebrating a special occasion, our passionate kitchen team ensures that every plate tells a story of quality, flavor, and dedication.",
        image: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715517/593101227_122132492186966799_6211401111810417260_n_ubnj32.jpg"
    },
    {
        title: "Unrivaled Hospitality & Craft Spirits",
        description: "Experience the true essence of relaxation in our lounge and bar, where genuine warmth meets a vibrant, stylish ambiance. Designed as a gathering spot for both travelers and locals, our bar serves an inventive menu of handcrafted signature cocktails, curated fine wines, and premium artisanal spirits. Beyond the drinks, it is our heartfelt hospitality that sets us apart. Our attentive team is dedicated to anticipating your every need, creating a comfortable, welcoming environment where you can unwind after a busy day, catch up with friends, or simply soak in the lively atmosphere.",
        image: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715515/591833672_122132492078966799_7616842841664671263_n_awhzwv.jpg"
    },
    // {
    //     title: "",
    //     description: "",
    //     image: ""
    // },
]


export default function RestaurantAndBar(){
    return(
        <section>
            <PageHeaderWithImage heading="Resturant" subHeading="This is the resturant of our hotel." />
            <CardWithImageAndText config={config} />
        </section>
    )
}