import {
  BedDouble,
  Users,
  Maximize,
  MapPin,
  Eye,
} from "lucide-react";




const FullObj = {
    title: "Royal Suite",
    subtitle: "Great for Business Trip",

    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600",

    description: `
The Royal Suite offers an unparalleled experience of luxury and comfort with its spacious bedroom and elegant living room. The suite features a lavish King Size Bed dressed in luxurious linens that ensure restful sleep. The bathroom includes premium amenities including robes, slippers, toiletries, and a modern shower.

Whether you're visiting for business or leisure, every detail has been thoughtfully designed to provide a relaxing and memorable stay.
`,

    price: "***",

    info: [
      {
        icon: <BedDouble size={18} />,
        label: "King Size Bed",
      },
      {
        icon: <Users size={18} />,
        label: "2 Adults | 1 Child",
      },
      {
        icon: <Maximize size={18} />,
        label: "30 m²",
      },
      {
        icon: <Eye size={18} />,
        label: "City View",
      },
      {
        icon: <MapPin size={18} />,
        label: "Bagerhat",
      },
    ],

    amenities: [
      "Air Conditioned",
      "Bath Tub",
      "Bottled Mineral Water",
      "Complimentary Breakfast",
      "Daily Newspaper",
      "Electronic Safe Box",
      "Fruit Basket",
      "Hot Shower",
      "Coffee Making Facility",
      "LED TV",
      "Room Service",
      "Tea & Coffee",
      "Welcome Drink",
      "WiFi Coverage",
    ],

    services: [
      "Safety Locker",
      "Iron & Iron Board",
      "Hair Dryer",
      "Laundry Service",
      "Doctor On Call",
      "Parking Facility",
      "Airport Pickup",
      "Conference Room",
      "Gymnasium",
      "Bar",
      "Banquet Hall",
      "Massage",
      "Beauty Salon",
      "Child Care",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900",
    ],
  };





  const rooms = [
    {
         ...FullObj,
        title: "Royal Suite 01",
        slug: "1",
        subtitle: "Great for Business Trip",
        heroImage: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-3_wuzhyx.jpg",
    },
    {
        ...FullObj,
        title: "Royal Suite 02",
        slug: "2",
        subtitle: "Great for Business Trip",
        heroImage: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-5_qxkplk.jpg",
    },
    {
        ...FullObj,
        title: "Royal Suite 03",
        slug: "3",
        subtitle: "Great for Business Trip",
        heroImage: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714898/bed-2_wskuva.jpg",
    },
    {
        ...FullObj,
        title: "Royal Suite 04",
        slug: "4",
        subtitle: "Great for Business Trip",
        heroImage: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-4_ecdof4.jpg",
    },
  ]


  export default rooms