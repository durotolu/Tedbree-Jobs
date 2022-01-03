import React from 'react';

export default function ErrorModal({ setShowModal }) {

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
            <div className="flex items-start justify-between rounded-t text-[#FF0000]">
              <h3 className="text-xl font-semibold mt-2">
              An error has occured
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-blackfloat-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-3"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-blackh-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}