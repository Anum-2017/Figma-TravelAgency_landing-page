import React from "react";
import Image from "next/image";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  highlighted: boolean;
}

function CategoryCard({ iconUrl, title, description, highlighted }: IProps) {
  return (
    <div
      className={`flex flex-col relative gap-4 items-center p-[2.5rem] ${
        highlighted ? "bg-white shadow-md rounded-[2.5rem]" : ""
      }`}
    >
      {/* Icon */}
      <div>
        <Image
          src={iconUrl}
          alt={`${title} icon`}
          width={80}
          height={80}
          className="h-[80px]"
        />
      </div>

      {/* Title */}
      <p className="text-subtitle text-[1.2rem] font-semibold">{title}</p>

      {/* Description */}
      <p className="text-lightGray text-[1rem] font-semibold text-center">
        {description}
      </p>

      {/* Highlighted Shape */}
      {highlighted && (
        <div className="absolute -bottom-8 -left-10 -z-10">
          <Image
            src="/images/rectangle-shape.png"
            alt="Decorative rectangle shape for highlighted card"
            width={80}
            height={80}
          />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
