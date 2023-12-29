import React from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer"
import HeaderLanding from "./HeaderLanding"

const LayoutLanding = () => {
  return (
    <div className="flex flex-col">
      <HeaderLanding />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutLanding
