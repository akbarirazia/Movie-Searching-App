import React from "react"

function SearchBar() {
  return (
    <div class="flex items-center">
      <input
        type="text"
        placeholder="Search"
        class="px-2 py-1 border rounded-md mr-2 focus:outline-none focus:border-blue-500"
      />
      <button class="bg-black text-white px-4 py-1 rounded-md">Search</button>
    </div>
  )
}

export default SearchBar
