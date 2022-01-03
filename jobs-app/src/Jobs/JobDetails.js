import React, { useState } from 'react';
import JobApplication from './JobApplication'

export default function JobDetails({ job }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-1/2 shadow-lg rounded-lg fixed right-0 mr-12">
      <div className="px-9 pt-11 pb-6 border-y-2 divide-[#EA5566]">
        <div className="text-xl flex place-content-between mb-3">
          <p>{job.title}</p>
        </div>
        <p className="flex mb-3">
          <svg className="mr-1 mt-1" width="14" height="14" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4212 1.95907C10.2514 0.789612 8.68995 0.094904 7.0381 0.00902943C5.38626 -0.0768451 3.76115 0.452202 2.47643 1.49406C1.19171 2.53592 0.338456 4.01674 0.0813439 5.65071C-0.175769 7.28469 0.181489 8.95598 1.08416 10.342L5.73542 17.4825C5.83892 17.6414 5.98045 17.7719 6.14716 17.8623C6.31388 17.9527 6.50051 18 6.69014 18C6.87977 18 7.0664 17.9527 7.23311 17.8623C7.39983 17.7719 7.54135 17.6414 7.64486 17.4825L12.2963 10.342C13.1338 9.05627 13.504 7.52167 13.3447 5.99544C13.1854 4.46922 12.5063 3.04414 11.4212 1.95907ZM11.2648 9.67009L6.69016 16.6927L2.11546 9.67009C0.715163 7.52044 1.0155 4.64368 2.82957 2.82953C3.33655 2.32254 3.93842 1.92037 4.60082 1.64599C5.26322 1.37161 5.97318 1.23039 6.69016 1.23039C7.40714 1.23039 8.1171 1.37161 8.7795 1.64599C9.4419 1.92037 10.0438 2.32254 10.5507 2.82953C12.3648 4.64368 12.6651 7.52044 11.2648 9.67009Z" fill="#62BECB"/>
          </svg>
          {job.location}
        </p>
        <div>
          <button className="text-[#FFFFFF] bg-[#0F4A7B] px-3 h-8 rounded-lg" type="button" onClick={() => {
            setShowModal(true)
          }}>Apply Via Find Job</button>
        </div>
        <>
          {showModal ? (
            <JobApplication job={job} setShowModal={setShowModal}/>
          ) : null}
        </>
      </div>
      <div className="px-9 pt-10 pb-12">
        <p className="mb-3">{job.description}</p>
        <p className="mb-4">Company: {job.company}</p>
        <p className="mb-2 font-bold">Job Description/Requirements</p>
        <p className="mb-2"><span className="font-semibold">Company: </span>{job.company}</p>
        <ul>
          <li>{job.category}</li>
          <li>{job.type}</li>
          <li>{job.benefits}</li>
          <li>{job.work_condition}</li>
        </ul>
      </div>
    </div>
  )
}
