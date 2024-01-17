import React from "react"
import Card from "./Card"
import InitailData from "../../Data/InitailData.json"

function DefaultCards() {
  const defaultCards = InitailData.map((data, index) => {
    return (
      <Card
        title={data.Title}
        year={data.Year}
        plot={data.Plot}
        picture={data.Poster}
        key={index}
      />
    )
  })
  return (
    <>
      <h3 className="text-center">Trending</h3>
      <hr />
      <br />
      <div className="w-full  grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-4 place-items-center place-content-center gap-2">
        {defaultCards}
      </div>
    </>
  )
}

export default DefaultCards
