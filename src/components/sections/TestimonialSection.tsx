import React from "react";
import TestimonialCard from "../cards/TestimonialCard";
import Image from "next/image";

function TestimonialSection() {
  const reviews = [
    {
      id: 1,
      imageUrl: "/images/mike.png",
      reviewerName: "Mike Taylor",
      position: "Lahore, Pakistan",
      review:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
    {
      id: 2,
      imageUrl: "/images/mike.png",
      reviewerName: "Chris Thomas",
      position: "CEO of Red Button",
      review:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
  ];

  return (
    <section className="flex justify-between flex-col xl:flex-row items-center lg:-mt-[5rem] gap-16">
      {/* Left Section */}
      <div>
        <p className="text-lightGray text-[1.125rem] font-[600] text-left uppercase">
          Testimonials
        </p>
        <p className="volkhov text-[3.125rem] text-title font-[700] text-left">
          What People Say About Us.
        </p>
        <div className="mt-[5.12rem]">
          <Image
            src="/images/slide-indicator.png"
            alt="Slide indicator showing navigation dots"
            className="hidden md:block"
            width={100}
            height={10}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-[4.12rem]">
        <div className="relative">
          {/* Main Testimonial */}
          <TestimonialCard
            position={reviews[0].position}
            review={reviews[0].review}
            reviewerName={reviews[0].reviewerName}
            imageUrl={reviews[0].imageUrl}
          />
          {/* Backdrop Testimonial */}
          <div className="absolute -bottom-[6rem] left-32 -z-10">
            <TestimonialCard
              position={reviews[1].position}
              review={reviews[1].review}
              reviewerName={reviews[1].reviewerName}
              imageUrl={reviews[1].imageUrl}
              isBackdrop
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col gap-16">
          <div className="hover:cursor-pointer">
            <Image
              src="/images/chevron-up.png"
              alt="Chevron pointing up for navigation"
              width={24}
              height={24}
            />
          </div>
          <div className="hover:cursor-pointer">
            <Image
              src="/images/chevron-down.png"
              alt="Chevron pointing down for navigation"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
