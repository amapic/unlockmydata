import React from "react";
import Image from "next/image";

type CookieList = {
  keyText: string;
  valueText: string;
};

export default function CookieType({ obj }: any) {
  return (
    <article className="mb-6 mr-5 md:mr-2">
      <div className="flex items-start">
        <Image
          src={obj.img}
          width={50}
          height={50}
          alt="icone"
          className="animate-pulse-slow"
        />
        <h3 className="text-xl text-brown">{obj.title}</h3>
      </div>
      <div className="w-1/2 border-1 border-brown my-2"></div>
      <p>{obj.text}</p>
    </article>
  );
}
