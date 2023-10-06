"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/shared/logo.svg";
import { Button } from "../buttons";
import { RiArrowDropDownLine, RiMenuFill, RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [state, setState] = useState({
    activeTab: "Home",
    hoverClass: "cursor-pointer pb-1 hover:text-red-500",
    activeClass: "text-red-500 border-b-2 border-red-500",
    openNav: false,
  });
  return (
    <div className="text-gray-700 border-primary w-full z-10 w-full justify-center md:flex">
      <div className="flex justify-between items-center md:space-x-10 lg:space-x-32 text-sm p-3 ">
        <div>
          <Image src={logo} alt="Alpaden Logo" width={70} height={70} />
        </div>
        <div className="space-x-5 hidden md:flex">
          <div
            className={`${state.hoverClass} ${
              state.activeTab == "Home" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "Home",
              };
            }}
          >
            {" "}
            Home
          </div>
          <div
           
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "About Us",
              };
            }} 
            className={`${state.hoverClass} ${
              state.activeTab == "About Us" ? state.activeClass : ""
            }`}
          >
            {" "}
            About Us
          </div>
          <div
            className={`flex ${state.hoverClass} ${
              state.activeTab == "Our Services" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "Our Services",
              };
            }}
          >
            <span>Our Services</span>
            <RiArrowDropDownLine className="text-xl" />
          </div>
          <div
            className={`${state.hoverClass} ${
              state.activeTab == "HEQ Policy" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "HEQ Policy",
              };
            }}
          >
            {" "}
            HEQ Policy
          </div>
          <div
            onClick={(prev) => {
              console.log("Project");
              return {
                ...prev,
                activeTab: "Projects",
              };
            }}
            className={`${state.hoverClass} ${
              state.activeTab == "Projects" ? state.activeClass : ""
            }`}
          >
            {" "}
            Projects
          </div>
          <div
            className={`${state.hoverClass} ${
              state.activeTab == "OEM/Partners" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "OEM/Partners",
              };
            }}
          >
            {" "}
            OEM/Partners
          </div>
        </div>

        <div className="space-x-5 hidden md:flex">
          <Button>Contact Us</Button>
        </div>

        <div
          onClick={() =>
            setState((prev: any) => {
              return {
                ...prev,
                openNav: true,
              };
            })
          }
          className="space-x-5 flex md:hidden"
        >
          <RiMenuFill className="text-3xl" />
        </div>
      </div>
      {state.openNav && (
        <div
          className={`bg-black bg-opacity-10 absolute inset-0 flex justify-end transition-all duration-700 ease-in-out`}
        >
          <div
            className={`h-full w-5/6 md:w-3/5 lg:w-2/5 z-10 bg-white border pr-4`}
          >
            <div className="w-11/12 flex justify-between mx-8 mt-4">
              <div className=" w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="text-md md:text-xl font-bold">Hello</p>
                  <div
                    onClick={() =>
                      setState((prev: any) => {
                        return {
                          ...prev,
                          openNav: false,
                        };
                      })
                    }
                    className="w-auto cursor-pointer"
                  >
                    <RiCloseLine className="text-4xl" />
                  </div>
                </div>
                <div className="space-x-5 hidden md:flex">
          <div
            className={`${state.hoverClass} ${
              state.activeTab == "Home" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "Home",
              };
            }}
          >
            {" "}
            Home
          </div>
          <div
           
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "About Us",
              };
            }} 
            className={`${state.hoverClass} ${
              state.activeTab == "About Us" ? state.activeClass : ""
            }`}
          >
            {" "}
            About Us
          </div>
          <div
            className={`flex ${state.hoverClass} ${
              state.activeTab == "Our Services" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "Our Services",
              };
            }}
          >
            <span>Our Services</span>
            <RiArrowDropDownLine className="text-xl" />
          </div>
          <div
            className={`${state.hoverClass} ${
              state.activeTab == "HEQ Policy" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "HEQ Policy",
              };
            }}
          >
            {" "}
            HEQ Policy
          </div>
          <div
            onClick={(prev) => {
              console.log("Project");
              return {
                ...prev,
                activeTab: "Projects",
              };
            }}
            className={`${state.hoverClass} ${
              state.activeTab == "Projects" ? state.activeClass : ""
            }`}
          >
            {" "}
            Projects
          </div>
          <div
            className={`${state.hoverClass} ${
              state.activeTab == "OEM/Partners" ? state.activeClass : ""
            }`}
            onClick={(prev) => {
              return {
                ...prev,
                activeTab: "OEM/Partners",
              };
            }}
          >
            {" "}
            OEM/Partners
          </div>
        </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
