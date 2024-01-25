import React, { useState } from "react"
import Modal from "./Modal"

function Card({ title, year, plot, picture, director }) {
  const [isOpen, setIsOpen] = useState(false)
  // console.log(director)
  return (
    <div className="flex justify-center">
      <a
        onClick={() => {
          setIsOpen(true)
        }}
        className="flex flex-col  bg-black border border-gray-900 rounded-lg shadow md:max-w-xl hover:bg-slate-950 
      w-5/6 h-full
        "
      >
        <div className="w-full relative">
          <img
            class="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg h-2/3"
            src={picture}
            alt=""
          />
        </div>
        <div className="flex flex-col  justify-between p-2 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title} <small>{year}</small>
          </h5>
          <p
            className="mb-3 font-normal
          text-xs text-gray-700 dark:text-gray-400  "
          >
            {plot}
          </p>
        </div>
      </a>
      <Modal
        isOpen={isOpen}
        isClose={() => {
          setIsOpen(false)
        }}
        data={{ title, year, plot, picture, director }}
      />
    </div>
  )
}

export default Card
