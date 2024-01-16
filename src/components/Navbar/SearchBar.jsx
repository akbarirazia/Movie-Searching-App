import React, { useContext, useState } from "react"
import { SearchContext } from "../../Contexts/SearchContext"

function SearchBar() {
  const [query, setQuery] = useState("")
  const searchContext = useContext(SearchContext)
  const searchQuery = () => {
    searchContext.searchHandler(query)
  }
  return (
    <div class="flex items-center">
      <input
        type="text"
        placeholder="Search"
        class="px-2 py-1 border rounded-md mr-2 focus:outline-none focus:border-black-500
        text-black"
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        value={query}
      />
      <button
        class="bg-black text-white px-4 py-1 rounded-md"
        onClick={searchQuery}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
