import React from "react";
import Image from "next/image";

interface IProps {
  imageUrl: string;
  title: string;
  amount: string;
  duration: string;
  highlighted: boolean;
}

function DestinationCard({
  imageUrl,
  title,
  amount,
  duration,
  highlighted,
}: IProps) {
  return (
    <div className="flex relative flex-col justify-between pb-[2.63rem] group">
      {/* Image Section */}
      <div className="object-fill">
        <Image
          src={imageUrl}
          alt={`Image of ${title}`}
          width={314}
          height={328} 
          className="w-[314px] h-[20.43rem] object-cover rounded-t-[1.5rem]"
        />
      </div>

      {/* Content Section */}
      <div className="bg-white w-full mt-[1.69rem] px-[1.62rem] group-hover:shadow-md pb-[2rem] group-hover:rounded-[1.5rem]">
        {/* Title and Amount */}
        <div className="flex justify-between text-lightGray text-[1.125rem] font-bold">
          <p>{title}</p>
          <p>{amount}</p>
        </div>

        {/* Duration Section */}
        <div className="flex gap-4 items-center mt-4">
          <div>
            <Image
              src="/images/send-icon.png"
              alt="Send icon representing travel duration"
              width={24}
              height={24}
            />
          </div>
          <p className="text-lightGray font-bold">{duration}</p>
        </div>
      </div>

      {/* Highlighted Decorative Ring */}
      {highlighted && (
        <div className="absolute bottom-[5rem] right-[-4rem] -z-10 hidden md:block">
          <Image
            src="/images/stylish-ring.png"
            alt="Decorative ring for highlighted card"
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
}

export default DestinationCard;
