import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import LayoutLanding from "../app/layout/LayoutLanding"
import { store } from "../app/redux/config/store"

test("renders Layout component", async () => {
  render(
    <Provider store={store}>
      <LayoutLanding />
    </Provider>,
  )
  const rootDiv = document.querySelector("body > div")
  expect(rootDiv).toBeInTheDocument()
})
