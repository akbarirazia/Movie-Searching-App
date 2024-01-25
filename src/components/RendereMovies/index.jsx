import React, { useContext, useEffect, useState } from "react"
import Card from "./Card"
import { ApiCall } from "../../Data/ApiCall"
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
            director={data.Director}
          />
        </div>
      ) : (
        <small className="block text-center text-gray-500 mb-4">
          Nothing to show!
        </small>
      )}
    </>
  )
}

export default RenderedMovies
