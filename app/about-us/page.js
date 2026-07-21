import About from "../components/About";
import PageHeaderWithImage from "../components/PageHeaderWithImage";

export default function AboutUs(){
    return(
        <section>
            <PageHeaderWithImage heading="About us" subHeading="you can read about us." />
            <About />
        </section>
    )
}