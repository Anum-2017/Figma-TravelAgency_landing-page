
import React from "react";
import Image from "next/image";

function LogoGroupSection() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="/images/logo-group.png"
        alt="Group of logos representing various brands"
        width={700} 
        height={700} 
        className="object-contain" 
      />
    </div>
  );
}

export default LogoGroupSection;
