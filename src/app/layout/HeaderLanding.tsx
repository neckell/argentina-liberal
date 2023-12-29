import React, { useEffect, useState } from "react"
import { MagicMotion } from "react-magic-motion"
import { useLocation } from "react-router-dom"

import useBreakpoint, { Breakpoints } from "../hooks/useBreakpoint"
import useScroll from "../hooks/useScroll"
import Paths from "../routes/paths"

const HeaderLanding: React.FC = () => {
  const location = useLocation()
  const [showFloatingSidebar, setShowFloatingSidebar] = useState(false)

  const breakpoint = useBreakpoint()
  useEffect(() => {
    if (breakpoint >= Breakpoints.lg) setShowFloatingSidebar(false)
  }, [breakpoint])

  const isScrolled = useScroll()
  const isRootPath = Paths.home === location.pathname
  const renderHeader =
    (isRootPath && !isScrolled) || (!isRootPath && isScrolled)
  // const enableSidebar = showFloatingSidebar

  return (
    <MagicMotion>
      <header
        className={`w-full z-10 ${
          isScrolled ? "fixed bg-ct-trademark-secondary opacity-95" : "absolute"
        }`}
        key={"exclude"}
      >
        {/* {enableSidebar && <SidebarLanding />} */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div
            className={`flex items-center ${
              renderHeader ? "justify-end" : "justify-between"
            } h-16 lg:h-20`}
          >
            {!renderHeader && (
              <div className="flex-shrink-0">
                <a href={Paths.home} title="" className="flex">
                  <img
                    className="w-auto h-8"
                    src={
                      "https://pngtree.com/freepng/simple-v-logo-design_3632479.html"
                    }
                    alt=""
                  />
                </a>
              </div>
            )}

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={() => {
                setShowFloatingSidebar(!showFloatingSidebar)
              }}
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              {/* <a
                href={Paths.determination}
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Soluciones{" "}
              </a>

              <a
                href="#nosotros"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Nosotros{" "}
              </a>

              <a
                href="#nosotros"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Planes{" "}
              </a> */}

              {/* <a
                href={Paths.home}
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full
              bg-ct-trademark text-white hover:bg-ct-trademark-dark focus:bg-ct-trademark-dark"
                role="button"
              >
                {" "}
                Prueba gratuita{" "}
              </a> */}
            </div>
          </div>
        </div>
      </header>
    </MagicMotion>
  )
}

export default HeaderLanding
