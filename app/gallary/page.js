"use client"

import DomeGallery from "@/components/DomeGallery";
import PageHeaderWithImage from "../components/PageHeaderWithImage";

export default function AboutUs(){
    return(
        <section>
            <PageHeaderWithImage heading="Galary" subHeading="Explore our cool Images." />

             <div style={{ width: '100vw', height: '100vh' }}>
            <DomeGallery
                fit={0.5}
                minRadius={600}
                maxVerticalRotationDeg={30}
                segments={20}
                dragDampening={2}
                grayscale={false}
                />
            </div>

        </section>
    )
}