import React from "react";
import Image from "next/image";
import Link from "next/link";


const GoBackBtn = () => {
  return (
    <div>
      <Link href='/'>
      <button className="flex ml-6 mt-8 bg-[#F8F8FB]">
        <Image
          src="./Assets/icons/goBackArrow.svg"
          alt="Go Back"
          width={9}
          height={4} className="w-[9px] h-[16.5px]"/>
        <span className="font-bold text-xs ml-7">Go back</span>
      </button>
      </Link>
    </div>
  );
};

export default GoBackBtn;
