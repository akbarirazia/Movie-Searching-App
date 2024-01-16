import React, { useContext, useEffect, useState } from "react"
import Card from "./Card"
import { ApiCall } from "../../Data/ApiCall"
import InitailData from "../../Data/InitailData.json"
import { SearchContext } from "../../Contexts/SearchContext"
import Loading from "../../Common/Loading"
import Error from "../../Common/Error"

function RenderedMovies() {
  const searchContext = useContext(SearchContext)
  console.log(searchContext)
  const [data, setData] = useState({})
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ApiCall(searchContext.query)
      .then((newData) => {
        setData(newData)
        console.log(newData)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [searchContext.query])

  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  // if (data.Response) {
  //   return <p>The film could not be found</p>
  // }

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
      <h3 className="text-center">Your searched film</h3>
      <hr />
      <br />
      {searchContext.query ? (
        <div className=" grid sm:gap-4 place-items-center place-content-center grid-col-4">
          <Card
            title={data.Title}
            year={data.Year}
            plot={data.Plot}
            picture={data.Poster}
          />
        </div>
      ) : (
        <small className="block text-center text-gray-500 mb-4">
          Nothing to show!
        </small>
      )}
      <h3 className="text-center">Trending</h3>
      <hr />
      <br />
      <div className="w-full  grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-4 place-items-center place-content-center ">
        {defaultCards}
      </div>
    </>
  )
}

export default RenderedMovies
