import React, { useEffect, useState } from "react"
import Card from "./Card"
import { ApiCall } from "../../Data/ApiCall"
import InitailData from "../../Data/InitailData.json"

function RenderedMovies({ title }) {
  const [data, setData] = useState({})

  useEffect(() => {
    // Fetch initial data when the component mounts
    ApiCall("joker").then((initialData) => {
      setData(initialData)
    })
  }, [])

  useEffect(() => {
    ApiCall(title).then((newData) => {
      setData(newData)
    })
  }, [title])

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
      <h3>Trending</h3>
      <div className="w-full  grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-4 place-items-center place-content-center ">
        {defaultCards}
      </div>
    </>
  )
}

export default RenderedMovies
