import React from "react"
import SearchBar from "./SearchBar"

function Navbar() {
  return (
    <nav class="bg-gray-800 p-4 rounded-md glass-bg">
      <div class="flex items-center justify-between">
        <div class="text-white text-lg font-semibold">Search Movie</div>

        <SearchBar />
      </div>
    </nav>
  )
}
export default Navbar
