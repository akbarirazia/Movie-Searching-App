import React, { useState } from "react"
export const SearchContext = React.createContext({
  query: "",
  searchHandler: () => {},
})

function SearchContextProvider(props) {
  const [query, setQuery] = useState("")

  const searchHandler = (data) => {
    setQuery(data)
  }
  return (
    <SearchContext.Provider
      value={{ query: query, searchHandler: searchHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
