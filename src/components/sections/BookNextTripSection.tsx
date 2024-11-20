
import React from "react";
import TripStepCard from "../cards/TripStepCard";
import Image from "next/image";

function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      id: 2,
      iconUrl: "/images/airport-icon.png",
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <section className="flex justify-between flex-col md:flex-row items-center mt-16 md:mt-0">
      <div className="max-w-xl">
        <p className="text-gray-500 text-[1.125rem] font-semibold text-left">
          Easy and Fast
        </p>
        <p className="volkhov text-[3.125rem] text-title font-bold text-left">
          Book your next trip in 3 easy steps
        </p>

        <div className="flex flex-col gap-12 mt-8">
          {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center md:w-[45%] mt-8 md:mt-0">
        <Image
          src="/images/next-trip.png"
          alt="Card with a girl on a wall"
          width={500} 
          height={500}
          className="rounded-xl" 
        />
      </div>
    </section>
  );
}

export default BookNextTripSection;
