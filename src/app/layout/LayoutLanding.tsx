import React from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer"
import HeaderLanding from "./HeaderLanding"

const LayoutLanding = () => {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-full flex flex-col">
        <HeaderLanding />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default LayoutLanding
