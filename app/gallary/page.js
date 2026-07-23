"use client"

import DomeGallery from "@/components/DomeGallery";
import PageHeaderWithImage from "../components/PageHeaderWithImage";


const images = [
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715519/615225446_122140468184966799_1029711659072391881_n_hxg4br.jpg",
        alt: "image-01"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715518/596634882_122134192370966799_3099785312354654093_n_yqnr1f.jpg",
        alt: "image-02"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715512/586028027_122131391294966799_4011374076702733866_n_efmnoa.jpg",
        alt: "image-03"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715513/588550108_122131391498966799_1038096926979125599_n_nstoad.jpg",
        alt: "image-04"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715511/586022471_122131391342966799_6689772450986238177_n_ukjk2p.jpg",
        alt: "image-05"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715507/564609032_122124380978966799_8877096975317055461_n_vymwfd.jpg",
        alt: "image-06"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715506/556665194_122121127322966799_5840990988354403355_n_ihfzi5.jpg",
        alt: "image-07"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715506/550355148_122119732010966799_480650542691936709_n_g1neph.jpg",
        alt: "image-08"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-1_wgpuwn.jpg",
        alt: "image-09"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-3_wuzhyx.jpg",
        alt: "image-10"
    },
    {
        src: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-4_ecdof4.jpg",
        alt: "image-12"
    },
]



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
                images={images}
                />
            </div>

        </section>
    )
}