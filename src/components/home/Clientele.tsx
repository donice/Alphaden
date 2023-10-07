"use client";
import React from "react";
import Image from "next/image";
import chevron from "@/assets/images/landing/clientele/chevron.svg";
import seplat from "@/assets/images/landing/clientele/seplat.svg";
import nnpc from "@/assets/images/landing/clientele/nnpc.svg";
import shell from "@/assets/images/landing/clientele/shell.svg";
import total from "@/assets/images/landing/clientele/total.svg";

const Clientele = () => {
  const clientele = [
    {
      key: 1,
      name: "Chevron",
      url: chevron,
    },
    {
      key: 2,
      name: "Seplat",
      url: seplat,
    },
    {
      key: 3,
      name: "NNPC",
      url: nnpc,
    },
    {
      key: 4,
      name: "Shell",
      url: shell,
    },
    {
      key: 5,
      name: "Total",
      url: total,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="bg clientele h-80"></div>
      <div className="w-full max-w-5xl my-16 h-auto flex flex-col justify-center items-center text-center px-8 md:px-0 md:h-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary">
            Our <span className="text-secondary">Clientele</span>
          </h2>
          <div className="bg-secondary h-2 w-16 rounded-xl mt-3"></div>
          <p className="text-xs text-gray-400 w-full max-w-2xl mt-8">
            From year to year, our clientele base has increased significantly
            due to our commitment and dedication to work with the combined
            effort of the staffers of Alphaden Energy and Oilfield Limited
          </p>
        </div>
        <div className="scroll-parent">
          <div className="scroll-child primary flex justify-between w-full ml-8">
            {clientele.map((client) => (
              <Image
                key={client.key}
                src={client.url}
                height={150}
                width={150}
                alt={client.name}
              />
            ))}
          </div>
          <div className="scroll-child secondary flex justify-between w-full ml-8">
            {clientele.map((client) => (
              <Image
                key={client.key}
                src={client.url}
                height={150}
                width={150}
                alt={client.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;