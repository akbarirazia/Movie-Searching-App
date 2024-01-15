import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Placeholder from "../components/Placeholder"
import RenderedMovies from "../components/RendereMovies"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <div className=" py-3 px-5 h-full m-4 ">
      <Navbar />
      <Placeholder />
      <RenderedMovies />
      <Footer />
    </div>
  )
}

export default HomePage
