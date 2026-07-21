"use client"

import DomeGallery from "@/components/DomeGallery";
import PageHeaderWithImage from "../components/PageHeaderWithImage";

export default function AboutUs(){
    return(
        <section>
            <PageHeaderWithImage heading="Galary" subHeading="Explore our cool Images." />

             <div style={{ width: '100vw', height: '100vh' }}>
            <DomeGallery
                fit={0.8}
                minRadius={600}
                maxVerticalRotationDeg={0}
                segments={34}
                dragDampening={2}
                grayscale={false}
                />
            </div>

        </section>
    )
}