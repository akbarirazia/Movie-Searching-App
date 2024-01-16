import React from "react"
import sea from "../../assets/sea.jpg"

function Card() {
  return (
    <div className="min-h-2/3  ">
      <a
        href="#"
        className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 
       
        "
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={sea}
          alt=""
        />
        <div class="flex flex-col justify-between p-2 leading-normal">
          <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p
            class="mb-3 font-normal
          text-xs text-gray-700 dark:text-gray-400"
          >
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  )
}

export default Card
