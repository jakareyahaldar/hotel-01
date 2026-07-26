import React from "react";
import {
  BedDouble,
  Users,
  Maximize,
  MapPin,
  Eye,
  ChevronRight,
} from "lucide-react";
import BookNowButtonRed from "@/app/components/BookNowButtonRed";
import rooms from "@/public/roomsData"

export default async function RoomDetails({params}) {
  const { slug } = await params
  const room = rooms.find((item)=> item.slug == slug)

  return (
    <div className="bg-gray-100">

      {/* HERO */}

      <section
        className="relative h-[65vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${room.heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">

          <h1 className="text-4xl font-bold md:text-6xl">
            {room.title}
          </h1>

          <p className="mt-3 text-lg text-gray-200">
            {room.subtitle}
          </p>

          <div className="mt-10 flex gap-8 text-sm uppercase tracking-wider">
            <button className="border-b-2 border-white pb-2">
              Details
            </button>

            <button>Amenities</button>

            <button>Gallery</button>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <div className="mx-auto -mt-20 max-w-7xl px-5 relative z-20">

        <div className="grid gap-10 rounded-lg bg-white p-8 shadow-2xl lg:grid-cols-3">

          {/* LEFT */}

          <div className="lg:col-span-2">

            <h2 className="mb-6 text-3xl font-semibold">
              Room Details
            </h2>

            <p className="leading-8 text-gray-600 whitespace-pre-line">
              {room.description}
            </p>
          </div>

          {/* RIGHT */}

          <div className="border-t pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

            <p className="text-xs tracking-[4px] text-gray-500">
              FROM
            </p>

            <h2 className="mt-2 text-5xl font-bold text-gray-900">
              ${room.price}
            </h2>

            <BookNowButtonRed />

            <div className="mt-8 space-y-5">

              {room?.info?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-gray-700"
                >
                  <div className="text-red-700">
                    {item.icon}
                  </div>

                  <span>{item.label}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* FEATURES */}

      <section className="mt-16 bg-slate-900 py-20 text-white">

        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2">

          {/* Amenities */}

          <div>

            <h2 className="mb-8 text-2xl font-semibold">
              Amenities
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              {room?.amenities?.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <ChevronRight
                    size={16}
                    className="text-red-500"
                  />

                  <span className="text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h2 className="mb-8 text-2xl font-semibold">
              Services
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">

              {room?.services?.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <ChevronRight
                    size={16}
                    className="text-red-500"
                  />

                  <span className="text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="mx-auto max-w-7xl px-5 py-16">

        <h2 className="mb-8 text-3xl font-semibold">
          Gallery
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {room?.gallery?.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt=""
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}













// const room = {
//     title: "Royal Suite",
//     subtitle: "Great for Business Trip",

//     heroImage:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600",

//     description: `
// The Royal Suite offers an unparalleled experience of luxury and comfort with its spacious bedroom and elegant living room. The suite features a lavish King Size Bed dressed in luxurious linens that ensure restful sleep. The bathroom includes premium amenities including robes, slippers, toiletries, and a modern shower.

// Whether you're visiting for business or leisure, every detail has been thoughtfully designed to provide a relaxing and memorable stay.
// `,

//     price: 250,

//     info: [
//       {
//         icon: <BedDouble size={18} />,
//         label: "King Size Bed",
//       },
//       {
//         icon: <Users size={18} />,
//         label: "2 Adults | 1 Child",
//       },
//       {
//         icon: <Maximize size={18} />,
//         label: "30 m²",
//       },
//       {
//         icon: <Eye size={18} />,
//         label: "City View",
//       },
//       {
//         icon: <MapPin size={18} />,
//         label: "Rangpur",
//       },
//     ],

//     amenities: [
//       "Air Conditioned",
//       "Bath Tub",
//       "Bottled Mineral Water",
//       "Complimentary Breakfast",
//       "Daily Newspaper",
//       "Electronic Safe Box",
//       "Fruit Basket",
//       "Hot Shower",
//       "Coffee Making Facility",
//       "LED TV",
//       "Room Service",
//       "Tea & Coffee",
//       "Welcome Drink",
//       "WiFi Coverage",
//     ],

//     services: [
//       "Safety Locker",
//       "Iron & Iron Board",
//       "Hair Dryer",
//       "Laundry Service",
//       "Doctor On Call",
//       "Parking Facility",
//       "Airport Pickup",
//       "Conference Room",
//       "Gymnasium",
//       "Bar",
//       "Banquet Hall",
//       "Massage",
//       "Beauty Salon",
//       "Child Care",
//     ],

//     gallery: [
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900",
//       "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900",
//       "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900",
//     ],
//   };