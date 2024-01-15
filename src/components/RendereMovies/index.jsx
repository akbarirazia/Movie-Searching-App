import React from "react"
import Card from "./Card"

function RenderedMovies() {
  return (
    <div className="w-full  grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-4">
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default RenderedMovies
