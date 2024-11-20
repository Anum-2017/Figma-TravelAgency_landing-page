import React from "react";
import Image from "next/image";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
}

function TripStepCard({ iconUrl, title, description }: IProps) {
  return (
    <div className="flex gap-8 items-center">
      <div className="flex-shrink-0">
        <Image
          src={iconUrl}
          alt="Step icon"
          width={50} 
          height={50}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-gray-500 text-[1rem] font-bold">{title}</p>
        <p className="text-gray-500 text-[1rem] font-normal">{description}</p>
      </div>
    </div>
  );
}

export default TripStepCard;
