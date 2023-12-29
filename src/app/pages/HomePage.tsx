import React, { useEffect, useState } from "react"

// import argentinaIcon from "./../assets/images/argentina-icon.png"

// A custom hook that returns the current date and time
const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return dateTime
}

// A function that calculates the number of days between two dates
const daysBetween = (date1: Date, date2: Date) => {
  const diff = Math.abs(date1.getTime() - date2.getTime())
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

// A component that displays the number of days passed from a given date
const DaysPassed = (props: { date: Date }) => {
  const today = useDateTime()
  const days = daysBetween(props.date, today)

  return (
    <div className="flex flex-col items-center justify-center bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
      <h1 className="text-9xl font-bold text-gray-800">{days}</h1>
      <p className="text-xl font-medium text-gray-600">
        days passed since {props.date.toLocaleDateString()}
      </p>
    </div>
  )
}

// A component that displays the current time in hours and seconds
const TimeDisplay = () => {
  const time = useDateTime()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  return (
    <div className="absolute bottom-0 right-0 m-4">
      <h2 className="text-4xl font-mono font-bold text-white">
        {hours}:{minutes}:{seconds}
      </h2>
    </div>
  )
}

// The main component that renders the background image and the other components
const HomePage = () => {
  // You can change the date and the image URL here
  const date = new Date(2023, 0, 1)
  const imageUrl =
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"

  return (
    <div
      className="app h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <DaysPassed date={date} />
      <TimeDisplay />
    </div>
  )
}

export default HomePage
