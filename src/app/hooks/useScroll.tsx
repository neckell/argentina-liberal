import { useEffect, useState } from "react"

const useScroll = (): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = (): void => {
      const scrollCheck: boolean = window.scrollY > 0
      if (scrollCheck !== isScrolled) {
        setIsScrolled(scrollCheck)
      }
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [isScrolled, setIsScrolled])

  return isScrolled
}

export default useScroll
