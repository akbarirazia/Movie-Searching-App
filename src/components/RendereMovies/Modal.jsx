import React from "react"
import ReactDom from "react-dom"

function Modal({ isOpen, isClose, data }) {
  if (!isOpen) return null
  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70"></div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-1/2 lg:min-h-1/2 bg-white rounded text-black p-2 pb-8 w-3/4 ">
        <button
          className="bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mb-2 float-end"
          onClick={isClose}
        >
          Close
        </button>
        <br />
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <img src={data.picture} alt={data.title} className="rounded" />

          <div class="border-r border-b border-l bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {data.title}
              </div>
              <p class="text-gray-700 text-base">{data.plot}</p>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <p class="text-gray-900 leading-none">{data.director}</p>
                <p class="text-gray-600">{data.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}

export default Modal
