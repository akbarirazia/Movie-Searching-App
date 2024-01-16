import React from "react"
import sea from "../../assets/sea.jpg"

function Card({ title, year, plot, picture }) {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col  bg-black border border-gray-900 rounded-lg shadow md:max-w-xl hover:bg-red-950 
      w-5/6 h-full
        "
      >
        <div className="w-full relative">
          <img
            class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={picture}
            alt=""
          />
        </div>
        <div class="flex flex-col  justify-between p-2 leading-normal">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title} <small>{year}</small>
          </h5>
          <p
            class="mb-3 font-normal
          text-xs text-gray-700 dark:text-gray-400"
          >
            {plot}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Card
