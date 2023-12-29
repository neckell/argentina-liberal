import { useEffect, useState } from "react"

const breakpoints = {
  xxs: 0,
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export enum Breakpoints {
  xxs = 0,
  xs = 1,
  sm = 2,
  md = 3,
  lg = 4,
  xl = 5,
  "2xl" = 6,
}
type Breakpoint = keyof typeof breakpoints

const getBreakpoint = (width: number): Breakpoint => {
  const keys = Object.keys(breakpoints) as Breakpoint[]
  for (let i = keys.length - 1; i >= 0; i--) {
    if (width >= breakpoints[keys[i]]) {
      return keys[i]
    }
  }
  return "xs"
}

const useBreakpoint = (): Breakpoints => {
  const [breakpoint, setBreakpoint] = useState<Breakpoints>(
    () => Breakpoints[getBreakpoint(window.innerWidth)],
  )

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(Breakpoints[getBreakpoint(window.innerWidth)])
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return breakpoint
}

export default useBreakpoint
