import React, { useState, useEffect } from 'react';
import JobApplication from './JobApplication'

export default function JobDetails({ job }) {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-1/2 shadow-lg rounded-lg">
      <div className="px-9 pt-11 pb-6">
        <div className="text-xl flex place-content-between mb-4">
          <p>{job.title}</p>
        </div>
        <p className="mb-6">{job.location}</p>
        <div>
          <button className="text-[#FFFFFF] bg-[#0F4A7B] px-3 h-8 rounded-lg" type="button" onClick={() => {
            setShowModal(true)
            // setJobId(job.id)
          }}>Apply Via Find Job</button>
        </div>


        <>
          {showModal ? (
            <JobApplication setShowModal={setShowModal}/>
          ) : null}
        </>



      </div>
      <div className="px-9 pt-10 pb-12">
        <p className="mb-3">{job.description}</p>
      </div>
    </div>
  )
}