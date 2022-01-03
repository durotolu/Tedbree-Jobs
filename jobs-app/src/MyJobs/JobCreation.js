import React, { useState } from 'react';
import axios from "axios";
import ErrorModal from "../ErrorModal";

export default function JobAppliction({ job, setShowModal }) {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [applicationData, setApplicationData] = useState({
    title: job.title,
    name: job.name,
    location: job.location,
    salary: job.salary,
    deadline: job.deadline,
    type: job.type,
    category: job.category,
  });

  const changeValue = e => setApplicationData({...applicationData, [e.target.name]: e.target.value});
  const isDisabled = () => {
      const { title, name, salary, location, deadline } = applicationData
      return !title || !name || !salary || !location || !deadline;
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (job.id) {
      axios.patch(`https://api.jobboard.tedbree.com/v1/jobs/${job.id}`, applicationData)
      .then(res => {
        setShowModal(false)
      })
      .catch(() => setShowErrorModal(true))
    } else {
      axios.post(`https://api.jobboard.tedbree.com/v1/my/jobs`, applicationData)
      .then(res => {
        setShowModal(false)
      })
      .catch(() => setShowErrorModal(true))
    }
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
            <div className="flex items-start justify-between rounded-t text-[#0F4A7B]">
              <h3 className="text-2xl font-semibold">
                New Job
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-blackfloat-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-blackh-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <p className="text-[12px] text-[#3E3E40] mb-6">Kindly provide the required information to get matched with suitable candidates</p>
            <div className="relative flex-auto">
              <form className="text-[#0F4A7B]" onSubmit={onSubmit} >
                <div className="mb-[18px]">
                  <label className="font-semibold" htmlFor="firstName">Job Title
                    <input className="mt-[8px] rounded block w-[510px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.title} name='title' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[18px]">
                  <label className="font-semibold" htmlFor="lastName">Company Name
                    <input className="mt-[8px] rounded block w-[510px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.name} name='name' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[18px]">
                  <label className="font-semibold" htmlFor="location">Location
                    <input className="mt-[8px] rounded block w-[510px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.location} name='location' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[18px]">
                  <label className="font-semibold" htmlFor="location">What type of employement is it?
                    <select className="mt-[8px] rounded block w-[510px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" value={applicationData.type} name='type' onChange={changeValue}>
                      <option value="permanent">Permanent</option>
                      <option value="contract">Contract</option>
                    </select>
                  </label>
                </div>
                <div className="mb-[18px]">
                  <label className="font-semibold" htmlFor="email">Salary
                    <input className="mt-[8px] rounded block w-[510px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.salary} name='salary' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[18px]">
                  <label className="font-semibold" htmlFor="phone">Submission deadline
                    <input className="mt-[8px] rounded block w-[510px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.deadline} name='deadline' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[45px]">
                  <label className="font-semibold" htmlFor="location">What Sector is this job categorized under?
                    <select className="mt-[8px] rounded block w-[510px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" value={applicationData.category} name='category' onChange={changeValue}>
                      <option value="tech">Tech</option>
                      <option value="finance">Finance</option>
                    </select>
                  </label>
                </div>
                <button className={`w-[100%] h-[50px] bg-[#0F4A7B] text-white mb-[8px] ${isDisabled() ? "opacity-30" : null}`} disabled={isDisabled()} >Create Job</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <>
        {showErrorModal ? (
          <ErrorModal setShowModal={setShowErrorModal}/>
        ) : null}
      </>
    </>
  )
}