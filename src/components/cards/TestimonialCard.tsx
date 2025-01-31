import React from "react";
import Image from "next/image";

interface IProps {
  imageUrl: string;
  review: string;
  reviewerName: string;
  position: string;
  isBackdrop?: boolean;
}

function TestimonialCard({
  imageUrl,
  review,
  reviewerName,
  position,
  isBackdrop = false,
}: IProps) {
  return (
    <div
      className={`p-8 rounded-slight bg-white max-w-[31.5rem] ${
        isBackdrop
          ? "shadow-none border-[2px] border-[#F7F7F7]"
          : "shadow-lg mr-8"
      }`}
    >
      <div className="relative">
        {/* Review Text */}
        <p className="text-lightGray font-bold text-[1rem] leading-8">
          &quot;{review}&quot;
        </p>

        {/* Reviewer Details */}
        <p className="text-[1.125rem] text-lightGray font-semibold mt-[2.12rem]">
          {reviewerName}
        </p>
        <p className="text-lightGray font-medium text-[0.875rem]">{position}</p>

        {/* Reviewer Image */}
        {!isBackdrop && (
          <div className="absolute top-[-4rem] md:left-[-4rem]">
            <Image
              src={imageUrl}
              alt={`Photo of ${reviewerName}`}
              width={68} 
              height={68} 
              className="rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TestimonialCard;
