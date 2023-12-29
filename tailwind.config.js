export const purge = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  options: {
    safelist: [
      // Add color classes
      ...["green", "blue", "red", "yellow", "sky", "gray"].flatMap((color) => [
        ...Array.from({ length: 9 }, (_, i) => i + 1).flatMap((number) => [
          `text-${color}-${number}00`,
          `dark:text-${color}-${number}00`,
          `border-${color}-${number}00`,
          `dark:border-${color}-${number}00`,
          `bg-${color}-${number}00`,
          `dark:bg-${color}-${number}00`,
          `hover:bg-${color}-${number}00`,
          `dark:hover:bg-${color}-${number}00`,
          `focus:ring-${color}-${number}00`,
          `dark:focus:ring-${color}-${number}00`,
        ]),
      ]),
    ],
  },
}
export const theme = {
  extend: {
    colors: {
      "ct-dark-600": "#222",
      "ct-dark-200": "#e5e7eb",
      "ct-dark-100": "#f5f6f7",
      "ct-blue-600": "#2363eb",
      "ct-yellow-600": "#f9d13e",
      "ct-white-light": "#e3e3e3",
      "ct-trademark": "#96AFD4",
      "ct-trademark-dark": "#515253",
      "ct-trademark-light": "#B8D0F2",
      "ct-trademark-secondary": "#D39D89",
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1125px",
        xl: "1125px",
        "2xl": "1125px",
      },
    },
  },
}
