import CardWithImageAndText from "../components/CardWithImageAndText";
import PageHeaderWithImage from "../components/PageHeaderWithImage";


const config = [
    {
        title: "Resturant card 01",
        description: "this is our resturant details card one, this is our resturant details card one, this is our resturant details card one, this is our resturant details card one, ",
        image: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715516/590089314_122132492102966799_5043990497907823583_n_j9fhjq.jpg"
    },
    {
        title: "Resturant card 02",
        description: "this is our resturant details card one, this is our resturant details card one, this is our resturant details card one, this is our resturant details card one,",
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