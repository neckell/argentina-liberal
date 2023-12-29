import { createBrowserRouter } from "react-router-dom"

import LayoutLanding from "../layout/LayoutLanding"
import HomePage from "../pages/HomePage"
import Paths from "./paths"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLanding />,
    children: [
      {
        path: Paths.home,
        element: <HomePage />,
      },
    ],
  },
])

export default router
