"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/shared/logo.svg";
import { Button } from "../shared/buttons";
import { RiArrowDropDownLine, RiMenuFill, RiCloseLine } from "react-icons/ri";
const Navbar = ({ setState }: any) => {
  const [navstate, setNavstate] = useState({
    activeTab: "Home",
    hoverClass: "cursor-pointer text-sm pb-1 hover:text-red-500",
    activeClass: "text-red-500 border-b-2 border-red-500",
    openNav: true,
  });
  return (
    <div className="text-gray-700 border-primary w-full z-10 w-full justify-center md:flex">
      <div className="flex justify-between items-center md:space-x-10 lg:space-x-40 text-sm p-3 ">
        <div>
          <Image src={logo} alt="Alpaden Logo" width={70} height={70} />
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link
            href="/"
            className={`${navstate.hoverClass} ${
              navstate.activeTab == "Home" ? navstate.activeClass : ""
            }`}
            onClick={() => {
              setNavstate((prev) => {
                return {
                  ...prev,
                  activeTab: "Home",
                };
              });
              setState((prev: any) => {
                return {
                  ...prev,
                  active: "Home",
                };
              });
            }}
          >
            {" "}
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => {
              setNavstate((prev) => {
                return {
                  ...prev,
                  activeTab: "About Us",
                };
              });
              setState((prev: any) => {
                return {
                  ...prev,
                  active: "About Us",
                };
              });
            }}
            className={`${navstate.hoverClass} ${
              navstate.activeTab == "About Us" ? navstate.activeClass : ""
            }`}
          >
            {" "}
            About Us
          </Link>
          <div
            className={`flex ${navstate.hoverClass} ${
              navstate.activeTab == "Our Services" ? navstate.activeClass : ""
            }`}
            onClick={() => {
              setNavstate((prev) => {
                return {
                  ...prev,
                  activeTab: "Our Services",
                };
              });
              setState((prev: any) => {
                return {
                  ...prev,
                  active: "Our Services",
                };
              });
            }}
          >
            <span>Our Services</span>
            <RiArrowDropDownLine className="text-xl" />
          </div>
          <div
            className={`${navstate.hoverClass} ${
              navstate.activeTab == "HEQ Policy" ? navstate.activeClass : ""
            }`}
            onClick={() => {
              setNavstate((prev) => {
                return {
                  ...prev,
                  activeTab: "HEQ Policy",
                };
              });
              setState((prev: any) => {
                return {
                  ...prev,
                  active: "HEQ Policy",
                };
              });
            }}
          >
            {" "}
            HEQ Policy
          </div>
          <div
            onClick={() => {
              setNavstate((prev) => {
                return {
                  ...prev,
                  activeTab: "Projects",
                };
              });
              setState((prev: any) => {
                return {
                  ...prev,
                  active: "Projects",
                };
              });
            }}
            className={`${navstate.hoverClass} ${
              navstate.activeTab == "Projects" ? navstate.activeClass : ""
            }`}
          >
            {" "}
            Projects
          </div>
          <div
            className={`${navstate.hoverClass} ${
              navstate.activeTab == "OEM/Partners" ? navstate.activeClass : ""
            }`}
            onClick={() => {
              setNavstate((prev) => {
                return {
                  ...prev,
                  activeTab: "OEM/Partners",
                };
              });
              setState((prev: any) => {
                return {
                  ...prev,
                  active: "OEM/Partners",
                };
              });
            }}
          >
            {" "}
            OEM/Partners
          </div>
        </div>

        <Link href={"/contact"} className="space-x-5 hidden md:flex">
          <Button>Contact Us</Button>
        </Link>

        <div
          onClick={() =>
            setNavstate((prev: any) => {
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
      {navstate.openNav && (
        <div
          className={`bg-black bg-opacity-10 absolute inset-0 flex justify-end transition-all duration-700 ease-in-out`}
        >
          <div
            className={`h-full w-5/6 md:w-3/5 lg:w-2/5 z-10 bg-white border pr-4`}
          >
            <div
              onClick={() => {
                setNavstate((prev) => {
                  return {
                    ...prev,
                    openNav: false,
                  };
                });
              }}
            >
              <RiCloseLine className="text-5xl" />
            </div>
            <div className="border w-11/12 justify-between mx-8 mt-4">
              <div className="flex flex-col space-y-6 ">
                <Link
                  href="/"
                  className={`${navstate.hoverClass} ${
                    navstate.activeTab == "Home" ? navstate.activeClass : ""
                  }`}
                  onClick={() => {
                    setNavstate((prev) => {
                      return {
                        ...prev,
                        activeTab: "Home",
                      };
                    });
                    setState((prev: any) => {
                      return {
                        ...prev,
                        active: "Home",
                      };
                    });
                  }}
                >
                  {" "}
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => {
                    setNavstate((prev) => {
                      return {
                        ...prev,
                        activeTab: "About Us",
                      };
                    });
                    setState((prev: any) => {
                      return {
                        ...prev,
                        active: "About Us",
                      };
                    });
                  }}
                  className={`${navstate.hoverClass} ${
                    navstate.activeTab == "About Us" ? navstate.activeClass : ""
                  }`}
                >
                  {" "}
                  About Us
                </Link>
                <div
                  className={`flex ${navstate.hoverClass} ${
                    navstate.activeTab == "Our Services"
                      ? navstate.activeClass
                      : ""
                  }`}
                  onClick={() => {
                    setNavstate((prev) => {
                      return {
                        ...prev,
                        activeTab: "Our Services",
                      };
                    });
                    setState((prev: any) => {
                      return {
                        ...prev,
                        active: "Our Services",
                      };
                    });
                  }}
                >
                  <span>Our Services</span>
                  <RiArrowDropDownLine className="text-xl" />
                </div>
                <div
                  className={`${navstate.hoverClass} ${
                    navstate.activeTab == "HEQ Policy"
                      ? navstate.activeClass
                      : ""
                  }`}
                  onClick={() => {
                    setNavstate((prev) => {
                      return {
                        ...prev,
                        activeTab: "HEQ Policy",
                      };
                    });
                    setState((prev: any) => {
                      return {
                        ...prev,
                        active: "HEQ Policy",
                      };
                    });
                  }}
                >
                  {" "}
                  HEQ Policy
                </div>
                <div
                  onClick={() => {
                    setNavstate((prev) => {
                      return {
                        ...prev,
                        activeTab: "Projects",
                      };
                    });
                    setState((prev: any) => {
                      return {
                        ...prev,
                        active: "Projects",
                      };
                    });
                  }}
                  className={`${navstate.hoverClass} ${
                    navstate.activeTab == "Projects" ? navstate.activeClass : ""
                  }`}
                >
                  {" "}
                  Projects
                </div>
                <div
                  className={`${navstate.hoverClass} ${
                    navstate.activeTab == "OEM/Partners"
                      ? navstate.activeClass
                      : ""
                  }`}
                  onClick={() => {
                    setNavstate((prev) => {
                      return {
                        ...prev,
                        activeTab: "OEM/Partners",
                      };
                    });
                    setState((prev: any) => {
                      return {
                        ...prev,
                        active: "OEM/Partners",
                      };
                    });
                  }}
                >
                  {" "}
                  OEM/Partners
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
