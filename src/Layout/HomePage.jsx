import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Placeholder from "../components/Placeholder"
import RenderedMovies from "../components/RendereMovies"
import Footer from "../components/Footer"
import DefaultCards from "../components/RendereMovies/DefaultCards"

function HomePage() {
  return (
    <div className=" lg:py-3 lg:px-5 h-full lg:m-4 sm:m-0">
      <Navbar />
      <Placeholder />
      <RenderedMovies />
      <DefaultCards />
      <Footer />
    </div>
  )
}

export default HomePage
