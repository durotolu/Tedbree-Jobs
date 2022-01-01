import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function JobApplication({ setShowModal }) {

  const [applicationData, setApplicationData] = useState({});


  const changeValue = e => setApplicationData({...applicationData, [e.target.name]: e.target.value});

  const isDisabled = () => {
      const { firstName, lastName, email, location, phone } = applicationData
      return !firstName || !lastName || !email || !location || !phone;
  }
  
  const onSubmit = (event) => {
  //   event.preventDefault();
  //   // props.addSmurfData(props.form);
  //   axios.get(`https://api.jobboard.tedbree.com/v1/jobs${}`)
  //   .then(res => console.log(res.data))
  //   .then(res => {
  //     setJobs(res.data.data)
  //     setJobId(res.data.data[0].id)
  //   })
  //   .catch(err => console.log(err.response));
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t">
              <h3 className="text-3xl font-semibold">
                Modal Title
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
            <p className="mb-6">job.location</p>
            {/*body*/}
            <div className="relative flex-auto">
              <form className="text-[#0F4A7B]" onSubmit={onSubmit} >
                <div className="mb-[16px]">
                  <label className="font-semibold" htmlFor="firstName">First Name
                    <input className="mt-[8px] rounded block w-[525px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.firstName} name='firstName' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[16px]">
                  <label className="font-semibold" htmlFor="lastName">Last Name
                    <input className="mt-[8px] rounded block w-[525px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.lastName} name='lastName' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[16px]">
                  <label className="font-semibold" htmlFor="email">Email Address
                    <input className="mt-[8px] rounded block w-[525px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='email' value={applicationData.email} name='email' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[16px]">
                  <label className="font-semibold" htmlFor="location">Location
                    <input className="mt-[8px] rounded block w-[525px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='text' value={applicationData.location} name='location' onChange={changeValue} />
                  </label>
                </div>
                <div className="mb-[16px]">
                  <label className="font-semibold" htmlFor="phone">Phone Number
                    <input className="mt-[8px] rounded block w-[525px] h-[40px] outline outline-[#0F4A7B] outline-offset-2 outline-1" type='tel' value={applicationData.phone} name='phone' onChange={changeValue} />
                  </label>
                </div>
                <label for="file-input">
                  <svg className="w-[100%] mb-[16px] cursor-pointer" height="240" viewBox="0 0 745 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="744.5" height="339.5" rx="9.75" fill="white" stroke="#0F4A7B" stroke-width="0.5"/>
                    <rect x="278" y="219" width="192" height="50" rx="10" fill="#0F4A7B"/>
                    <path d="M331.14 242.466C331.692 242.754 332.124 243.15 332.436 243.654C332.748 244.158 332.904 244.74 332.904 245.4C332.904 246.432 332.538 247.29 331.806 247.974C331.074 248.658 330.18 249 329.124 249H323.724V236.4H328.728C329.76 236.4 330.63 236.736 331.338 237.408C332.058 238.068 332.418 238.896 332.418 239.892C332.418 240.984 331.992 241.842 331.14 242.466ZM328.728 238.344H325.794V241.656H328.728C329.184 241.656 329.568 241.5 329.88 241.188C330.192 240.864 330.348 240.468 330.348 240C330.348 239.532 330.192 239.142 329.88 238.83C329.568 238.506 329.184 238.344 328.728 238.344ZM329.124 247.056C329.604 247.056 330.006 246.888 330.33 246.552C330.666 246.204 330.834 245.784 330.834 245.292C330.834 244.8 330.666 244.386 330.33 244.05C330.006 243.702 329.604 243.528 329.124 243.528H325.794V247.056H329.124ZM337.249 241.512C337.741 240.396 338.665 239.838 340.021 239.838V241.944C339.277 241.896 338.629 242.076 338.077 242.484C337.525 242.88 337.249 243.54 337.249 244.464V249H335.305V240H337.249V241.512ZM346.003 249.234C344.683 249.234 343.561 248.778 342.637 247.866C341.713 246.954 341.251 245.832 341.251 244.5C341.251 243.168 341.713 242.046 342.637 241.134C343.561 240.222 344.683 239.766 346.003 239.766C347.335 239.766 348.457 240.222 349.369 241.134C350.293 242.046 350.755 243.168 350.755 244.5C350.755 245.832 350.293 246.954 349.369 247.866C348.457 248.778 347.335 249.234 346.003 249.234ZM344.005 246.534C344.545 247.074 345.211 247.344 346.003 247.344C346.795 247.344 347.461 247.074 348.001 246.534C348.541 245.994 348.811 245.316 348.811 244.5C348.811 243.684 348.541 243.006 348.001 242.466C347.461 241.926 346.795 241.656 346.003 241.656C345.211 241.656 344.545 241.926 344.005 242.466C343.465 243.006 343.195 243.684 343.195 244.5C343.195 245.316 343.465 245.994 344.005 246.534ZM363.25 240H365.302L362.476 249H360.568L358.696 242.934L356.806 249H354.898L352.072 240H354.124L355.87 246.21L357.76 240H359.614L361.486 246.21L363.25 240ZM368.654 242.484C368.654 242.784 368.816 243.024 369.14 243.204C369.476 243.372 369.878 243.522 370.346 243.654C370.826 243.774 371.306 243.918 371.786 244.086C372.266 244.254 372.668 244.542 372.992 244.95C373.328 245.346 373.496 245.85 373.496 246.462C373.496 247.326 373.16 248.004 372.488 248.496C371.828 248.988 370.994 249.234 369.986 249.234C369.098 249.234 368.336 249.048 367.7 248.676C367.064 248.304 366.602 247.788 366.314 247.128L367.988 246.156C368.3 247.02 368.966 247.452 369.986 247.452C371.006 247.452 371.516 247.116 371.516 246.444C371.516 246.156 371.348 245.922 371.012 245.742C370.688 245.562 370.286 245.412 369.806 245.292C369.338 245.16 368.864 245.01 368.384 244.842C367.904 244.674 367.496 244.398 367.16 244.014C366.836 243.618 366.674 243.12 366.674 242.52C366.674 241.692 366.986 241.026 367.61 240.522C368.246 240.018 369.032 239.766 369.968 239.766C370.712 239.766 371.372 239.934 371.948 240.27C372.536 240.594 372.986 241.05 373.298 241.638L371.66 242.556C371.348 241.872 370.784 241.53 369.968 241.53C369.596 241.53 369.284 241.614 369.032 241.782C368.78 241.938 368.654 242.172 368.654 242.484ZM377.227 245.328C377.371 246.012 377.701 246.54 378.217 246.912C378.733 247.272 379.363 247.452 380.107 247.452C381.139 247.452 381.913 247.08 382.429 246.336L384.031 247.272C383.143 248.58 381.829 249.234 380.089 249.234C378.625 249.234 377.443 248.79 376.543 247.902C375.643 247.002 375.193 245.868 375.193 244.5C375.193 243.156 375.637 242.034 376.525 241.134C377.413 240.222 378.553 239.766 379.945 239.766C381.265 239.766 382.345 240.228 383.185 241.152C384.037 242.076 384.463 243.198 384.463 244.518C384.463 244.722 384.439 244.992 384.391 245.328H377.227ZM377.208 243.744H382.501C382.369 243.012 382.063 242.46 381.583 242.088C381.115 241.716 380.563 241.53 379.927 241.53C379.207 241.53 378.607 241.728 378.127 242.124C377.647 242.52 377.341 243.06 377.208 243.744ZM399.637 240V249H397.693V241.872H394.705V249H392.761V241.872H391.393V240H392.761V239.82C392.761 237.384 394.117 236.166 396.829 236.166C397.465 236.166 398.131 236.244 398.827 236.4V238.182C398.191 238.086 397.525 238.038 396.829 238.038C396.109 238.038 395.575 238.17 395.227 238.434C394.879 238.698 394.705 239.16 394.705 239.82V240H399.637ZM402.607 249V235.86H404.551V249H402.607ZM409.058 245.328C409.202 246.012 409.532 246.54 410.048 246.912C410.564 247.272 411.194 247.452 411.938 247.452C412.97 247.452 413.744 247.08 414.26 246.336L415.862 247.272C414.974 248.58 413.66 249.234 411.92 249.234C410.456 249.234 409.274 248.79 408.374 247.902C407.474 247.002 407.024 245.868 407.024 244.5C407.024 243.156 407.468 242.034 408.356 241.134C409.244 240.222 410.384 239.766 411.776 239.766C413.096 239.766 414.176 240.228 415.016 241.152C415.868 242.076 416.294 243.198 416.294 244.518C416.294 244.722 416.27 244.992 416.222 245.328H409.058ZM409.04 243.744H414.332C414.2 243.012 413.894 242.46 413.414 242.088C412.946 241.716 412.394 241.53 411.758 241.53C411.038 241.53 410.438 241.728 409.958 242.124C409.478 242.52 409.172 243.06 409.04 243.744ZM420.119 242.484C420.119 242.784 420.281 243.024 420.605 243.204C420.941 243.372 421.343 243.522 421.811 243.654C422.291 243.774 422.771 243.918 423.251 244.086C423.731 244.254 424.133 244.542 424.457 244.95C424.793 245.346 424.961 245.85 424.961 246.462C424.961 247.326 424.625 248.004 423.953 248.496C423.293 248.988 422.459 249.234 421.451 249.234C420.563 249.234 419.801 249.048 419.165 248.676C418.529 248.304 418.067 247.788 417.779 247.128L419.453 246.156C419.765 247.02 420.431 247.452 421.451 247.452C422.471 247.452 422.981 247.116 422.981 246.444C422.981 246.156 422.813 245.922 422.477 245.742C422.153 245.562 421.751 245.412 421.271 245.292C420.803 245.16 420.329 245.01 419.849 244.842C419.369 244.674 418.961 244.398 418.625 244.014C418.301 243.618 418.139 243.12 418.139 242.52C418.139 241.692 418.451 241.026 419.075 240.522C419.711 240.018 420.497 239.766 421.433 239.766C422.177 239.766 422.837 239.934 423.413 240.27C424.001 240.594 424.451 241.05 424.763 241.638L423.125 242.556C422.813 241.872 422.249 241.53 421.433 241.53C421.061 241.53 420.749 241.614 420.497 241.782C420.245 241.938 420.119 242.172 420.119 242.484Z" fill="white"/>
                    <path d="M370.567 205.234C369.247 205.234 368.125 204.778 367.201 203.866C366.277 202.954 365.815 201.832 365.815 200.5C365.815 199.168 366.277 198.046 367.201 197.134C368.125 196.222 369.247 195.766 370.567 195.766C371.899 195.766 373.021 196.222 373.933 197.134C374.857 198.046 375.319 199.168 375.319 200.5C375.319 201.832 374.857 202.954 373.933 203.866C373.021 204.778 371.899 205.234 370.567 205.234ZM368.569 202.534C369.109 203.074 369.775 203.344 370.567 203.344C371.359 203.344 372.025 203.074 372.565 202.534C373.105 201.994 373.375 201.316 373.375 200.5C373.375 199.684 373.105 199.006 372.565 198.466C372.025 197.926 371.359 197.656 370.567 197.656C369.775 197.656 369.109 197.926 368.569 198.466C368.029 199.006 367.759 199.684 367.759 200.5C367.759 201.316 368.029 201.994 368.569 202.534ZM379.741 197.512C380.233 196.396 381.157 195.838 382.513 195.838V197.944C381.769 197.896 381.121 198.076 380.569 198.484C380.017 198.88 379.741 199.54 379.741 200.464V205H377.797V196H379.741V197.512Z" fill="#0F4A7B"/>
                    <path d="M407.669 98.9235V98.0578C407.484 90.7292 404.408 83.7711 399.112 78.7026C393.815 73.6341 386.728 70.8668 379.399 71.0049C373.94 70.9604 368.584 72.4942 363.977 75.4219C359.369 78.3496 355.706 82.5464 353.428 87.5072C347.013 88.2228 341.084 91.268 336.766 96.0652C332.447 100.862 330.04 107.078 330 113.532C330.007 116.952 330.688 120.337 332.004 123.494C333.32 126.65 335.246 129.516 337.67 131.928C340.095 134.34 342.971 136.251 346.134 137.55C349.298 138.85 352.686 139.514 356.106 139.503H366.251V134.092H356.106C350.877 133.809 345.95 131.555 342.317 127.783C338.685 124.011 336.618 119.002 336.532 113.766C336.446 108.53 338.348 103.456 341.855 99.5675C345.362 95.6786 350.213 93.2637 355.43 92.8096H357.242L357.865 91.1052C359.542 86.7474 362.518 83.0096 366.388 80.397C370.259 77.7845 374.838 76.423 379.507 76.4967C385.402 76.3582 391.113 78.5553 395.395 82.6092C399.677 86.6632 402.183 92.2453 402.367 98.139C402.404 98.8599 402.404 99.5823 402.367 100.303L402.15 102.251L403.909 103.063C407.31 104.595 410.079 107.252 411.751 110.586C413.423 113.921 413.896 117.729 413.089 121.371C412.283 125.013 410.246 128.266 407.323 130.583C404.399 132.9 400.767 134.139 397.037 134.092H382.483V139.503H397.037C401.848 139.537 406.534 137.968 410.354 135.042C414.173 132.116 416.909 128.001 418.128 123.346C419.348 118.692 418.981 113.764 417.087 109.341C415.193 104.918 411.879 101.253 407.669 98.9235Z" fill="#0F4A7B"/>
                    <path d="M385.945 122.865C386.485 122.874 387.015 122.72 387.467 122.426C387.919 122.131 388.272 121.707 388.481 121.21C388.691 120.712 388.747 120.164 388.642 119.634C388.537 119.105 388.276 118.619 387.893 118.239L374.366 104.712L360.84 118.239C360.397 118.756 360.165 119.422 360.191 120.103C360.218 120.784 360.5 121.43 360.982 121.911C361.464 122.393 362.109 122.676 362.79 122.702C363.471 122.728 364.137 122.497 364.654 122.053L371.661 115.155V148.295C371.661 149.012 371.946 149.7 372.453 150.208C372.961 150.715 373.649 151 374.366 151C375.084 151 375.772 150.715 376.279 150.208C376.787 149.7 377.072 149.012 377.072 148.295V115.155L384.024 122.107C384.539 122.604 385.23 122.876 385.945 122.865Z" fill="#0F4A7B"/>
                    <path d="M254.474 162.4C256.202 162.4 257.636 163.006 258.776 164.218C259.928 165.43 260.504 166.924 260.504 168.7C260.504 170.464 259.928 171.958 258.776 173.182C257.636 174.394 256.202 175 254.474 175H249.524V162.4H254.474ZM254.474 173.02C255.662 173.02 256.628 172.612 257.372 171.796C258.128 170.98 258.506 169.948 258.506 168.7C258.506 167.44 258.128 166.408 257.372 165.604C256.628 164.788 255.662 164.38 254.474 164.38H251.594V173.02H254.474ZM264.929 167.512C265.421 166.396 266.345 165.838 267.701 165.838V167.944C266.957 167.896 266.309 168.076 265.757 168.484C265.205 168.88 264.929 169.54 264.929 170.464V175H262.985V166H264.929V167.512ZM276.563 166H278.507V175H276.563V173.704C275.831 174.724 274.781 175.234 273.413 175.234C272.177 175.234 271.121 174.778 270.245 173.866C269.369 172.942 268.931 171.82 268.931 170.5C268.931 169.168 269.369 168.046 270.245 167.134C271.121 166.222 272.177 165.766 273.413 165.766C274.781 165.766 275.831 166.27 276.563 167.278V166ZM271.685 172.57C272.225 173.11 272.903 173.38 273.719 173.38C274.535 173.38 275.213 173.11 275.753 172.57C276.293 172.018 276.563 171.328 276.563 170.5C276.563 169.672 276.293 168.988 275.753 168.448C275.213 167.896 274.535 167.62 273.719 167.62C272.903 167.62 272.225 167.896 271.685 168.448C271.145 168.988 270.875 169.672 270.875 170.5C270.875 171.328 271.145 172.018 271.685 172.57ZM288.657 166H290.565V174.586C290.565 175.954 290.115 177.004 289.215 177.736C288.315 178.468 287.223 178.834 285.939 178.834C283.863 178.834 282.441 178.108 281.673 176.656L283.347 175.684C283.815 176.608 284.691 177.07 285.975 177.07C286.815 177.07 287.469 176.848 287.937 176.404C288.417 175.972 288.657 175.366 288.657 174.586V173.488C287.925 174.532 286.881 175.054 285.525 175.054C284.253 175.054 283.179 174.604 282.303 173.704C281.427 172.792 280.989 171.694 280.989 170.41C280.989 169.126 281.427 168.034 282.303 167.134C283.179 166.222 284.253 165.766 285.525 165.766C286.881 165.766 287.925 166.288 288.657 167.332V166ZM283.743 172.426C284.295 172.966 284.979 173.236 285.795 173.236C286.611 173.236 287.289 172.966 287.829 172.426C288.381 171.886 288.657 171.214 288.657 170.41C288.657 169.606 288.381 168.934 287.829 168.394C287.289 167.854 286.611 167.584 285.795 167.584C284.979 167.584 284.295 167.854 283.743 168.394C283.203 168.934 282.933 169.606 282.933 170.41C282.933 171.214 283.203 171.886 283.743 172.426ZM305.899 166H307.843V175H305.899V173.704C305.167 174.724 304.117 175.234 302.749 175.234C301.513 175.234 300.457 174.778 299.581 173.866C298.705 172.942 298.267 171.82 298.267 170.5C298.267 169.168 298.705 168.046 299.581 167.134C300.457 166.222 301.513 165.766 302.749 165.766C304.117 165.766 305.167 166.27 305.899 167.278V166ZM301.021 172.57C301.561 173.11 302.239 173.38 303.055 173.38C303.871 173.38 304.549 173.11 305.089 172.57C305.629 172.018 305.899 171.328 305.899 170.5C305.899 169.672 305.629 168.988 305.089 168.448C304.549 167.896 303.871 167.62 303.055 167.62C302.239 167.62 301.561 167.896 301.021 168.448C300.481 168.988 300.211 169.672 300.211 170.5C300.211 171.328 300.481 172.018 301.021 172.57ZM315.563 165.766C316.595 165.766 317.429 166.096 318.065 166.756C318.701 167.416 319.019 168.322 319.019 169.474V175H317.075V169.672C317.075 169 316.895 168.484 316.535 168.124C316.175 167.764 315.683 167.584 315.059 167.584C314.375 167.584 313.823 167.8 313.403 168.232C312.983 168.652 312.773 169.3 312.773 170.176V175H310.829V166H312.773V167.152C313.361 166.228 314.291 165.766 315.563 165.766ZM328.96 162.4H330.904V175H328.96V173.704C328.228 174.724 327.178 175.234 325.81 175.234C324.574 175.234 323.518 174.778 322.642 173.866C321.766 172.942 321.328 171.82 321.328 170.5C321.328 169.168 321.766 168.046 322.642 167.134C323.518 166.222 324.574 165.766 325.81 165.766C327.178 165.766 328.228 166.27 328.96 167.278V162.4ZM324.082 172.57C324.622 173.11 325.3 173.38 326.116 173.38C326.932 173.38 327.61 173.11 328.15 172.57C328.69 172.018 328.96 171.328 328.96 170.5C328.96 169.672 328.69 168.988 328.15 168.448C327.61 167.896 326.932 167.62 326.116 167.62C325.3 167.62 324.622 167.896 324.082 168.448C323.542 168.988 323.272 169.672 323.272 170.5C323.272 171.328 323.542 172.018 324.082 172.57ZM346.238 162.4H348.182V175H346.238V173.704C345.506 174.724 344.456 175.234 343.088 175.234C341.852 175.234 340.796 174.778 339.92 173.866C339.044 172.942 338.606 171.82 338.606 170.5C338.606 169.168 339.044 168.046 339.92 167.134C340.796 166.222 341.852 165.766 343.088 165.766C344.456 165.766 345.506 166.27 346.238 167.278V162.4ZM341.36 172.57C341.9 173.11 342.578 173.38 343.394 173.38C344.21 173.38 344.888 173.11 345.428 172.57C345.968 172.018 346.238 171.328 346.238 170.5C346.238 169.672 345.968 168.988 345.428 168.448C344.888 167.896 344.21 167.62 343.394 167.62C342.578 167.62 341.9 167.896 341.36 168.448C340.82 168.988 340.55 169.672 340.55 170.5C340.55 171.328 340.82 172.018 341.36 172.57ZM353.112 167.512C353.604 166.396 354.528 165.838 355.884 165.838V167.944C355.14 167.896 354.492 168.076 353.94 168.484C353.388 168.88 353.112 169.54 353.112 170.464V175H351.168V166H353.112V167.512ZM361.866 175.234C360.546 175.234 359.424 174.778 358.5 173.866C357.576 172.954 357.114 171.832 357.114 170.5C357.114 169.168 357.576 168.046 358.5 167.134C359.424 166.222 360.546 165.766 361.866 165.766C363.198 165.766 364.32 166.222 365.232 167.134C366.156 168.046 366.618 169.168 366.618 170.5C366.618 171.832 366.156 172.954 365.232 173.866C364.32 174.778 363.198 175.234 361.866 175.234ZM359.868 172.534C360.408 173.074 361.074 173.344 361.866 173.344C362.658 173.344 363.324 173.074 363.864 172.534C364.404 171.994 364.674 171.316 364.674 170.5C364.674 169.684 364.404 169.006 363.864 168.466C363.324 167.926 362.658 167.656 361.866 167.656C361.074 167.656 360.408 167.926 359.868 168.466C359.328 169.006 359.058 169.684 359.058 170.5C359.058 171.316 359.328 171.994 359.868 172.534ZM374.19 165.766C375.426 165.766 376.482 166.228 377.358 167.152C378.234 168.064 378.672 169.18 378.672 170.5C378.672 171.832 378.234 172.954 377.358 173.866C376.482 174.778 375.426 175.234 374.19 175.234C372.822 175.234 371.772 174.73 371.04 173.722V178.6H369.096V166H371.04V167.296C371.772 166.276 372.822 165.766 374.19 165.766ZM371.85 172.57C372.39 173.11 373.068 173.38 373.884 173.38C374.7 173.38 375.378 173.11 375.918 172.57C376.458 172.018 376.728 171.328 376.728 170.5C376.728 169.672 376.458 168.988 375.918 168.448C375.378 167.896 374.7 167.62 373.884 167.62C373.068 167.62 372.39 167.896 371.85 168.448C371.31 168.988 371.04 169.672 371.04 170.5C371.04 171.328 371.31 172.018 371.85 172.57ZM392.44 166H394.51L391.054 175.288C390.19 177.616 388.726 178.72 386.662 178.6V176.782C387.274 176.818 387.766 176.686 388.138 176.386C388.51 176.098 388.816 175.642 389.056 175.018L389.146 174.838L385.33 166H387.454L390.136 172.534L392.44 166ZM400.342 175.234C399.022 175.234 397.9 174.778 396.976 173.866C396.052 172.954 395.59 171.832 395.59 170.5C395.59 169.168 396.052 168.046 396.976 167.134C397.9 166.222 399.022 165.766 400.342 165.766C401.674 165.766 402.796 166.222 403.708 167.134C404.632 168.046 405.094 169.168 405.094 170.5C405.094 171.832 404.632 172.954 403.708 173.866C402.796 174.778 401.674 175.234 400.342 175.234ZM398.344 172.534C398.884 173.074 399.55 173.344 400.342 173.344C401.134 173.344 401.8 173.074 402.34 172.534C402.88 171.994 403.15 171.316 403.15 170.5C403.15 169.684 402.88 169.006 402.34 168.466C401.8 167.926 401.134 167.656 400.342 167.656C399.55 167.656 398.884 167.926 398.344 168.466C397.804 169.006 397.534 169.684 397.534 170.5C397.534 171.316 397.804 171.994 398.344 172.534ZM413.638 166H415.582V175H413.638V173.848C413.05 174.772 412.12 175.234 410.848 175.234C409.816 175.234 408.982 174.904 408.346 174.244C407.71 173.584 407.392 172.678 407.392 171.526V166H409.336V171.328C409.336 172 409.516 172.516 409.876 172.876C410.236 173.236 410.728 173.416 411.352 173.416C412.036 173.416 412.588 173.206 413.008 172.786C413.428 172.354 413.638 171.7 413.638 170.824V166ZM420.519 167.512C421.011 166.396 421.935 165.838 423.291 165.838V167.944C422.547 167.896 421.899 168.076 421.347 168.484C420.795 168.88 420.519 169.54 420.519 170.464V175H418.575V166H420.519V167.512ZM436.752 175.234C434.856 175.234 433.284 174.61 432.036 173.362C430.788 172.102 430.164 170.548 430.164 168.7C430.164 166.852 430.788 165.304 432.036 164.056C433.284 162.796 434.856 162.166 436.752 162.166C437.892 162.166 438.942 162.436 439.902 162.976C440.874 163.516 441.63 164.248 442.17 165.172L440.37 166.216C440.034 165.592 439.542 165.1 438.894 164.74C438.258 164.368 437.544 164.182 436.752 164.182C435.408 164.182 434.316 164.608 433.476 165.46C432.648 166.312 432.234 167.392 432.234 168.7C432.234 170.008 432.648 171.088 433.476 171.94C434.316 172.792 435.408 173.218 436.752 173.218C437.544 173.218 438.264 173.038 438.912 172.678C439.56 172.306 440.046 171.808 440.37 171.184L442.17 172.21C441.642 173.134 440.892 173.872 439.92 174.424C438.96 174.964 437.904 175.234 436.752 175.234ZM447.725 175L443.351 162.4H445.619L448.967 172.498L452.333 162.4H454.583L450.209 175H447.725ZM466.478 165.766C467.51 165.766 468.344 166.096 468.98 166.756C469.616 167.416 469.934 168.322 469.934 169.474V175H467.99V169.672C467.99 169 467.81 168.484 467.45 168.124C467.09 167.764 466.598 167.584 465.974 167.584C465.29 167.584 464.738 167.8 464.318 168.232C463.898 168.652 463.688 169.3 463.688 170.176V175H461.744V162.4H463.688V167.152C464.276 166.228 465.206 165.766 466.478 165.766ZM474.277 171.328C474.421 172.012 474.751 172.54 475.267 172.912C475.783 173.272 476.413 173.452 477.157 173.452C478.189 173.452 478.963 173.08 479.479 172.336L481.081 173.272C480.193 174.58 478.879 175.234 477.139 175.234C475.675 175.234 474.493 174.79 473.593 173.902C472.693 173.002 472.243 171.868 472.243 170.5C472.243 169.156 472.687 168.034 473.575 167.134C474.463 166.222 475.603 165.766 476.995 165.766C478.315 165.766 479.395 166.228 480.235 167.152C481.087 168.076 481.513 169.198 481.513 170.518C481.513 170.722 481.489 170.992 481.441 171.328H474.277ZM474.259 169.744H479.551C479.419 169.012 479.113 168.46 478.633 168.088C478.165 167.716 477.613 167.53 476.977 167.53C476.257 167.53 475.657 167.728 475.177 168.124C474.697 168.52 474.391 169.06 474.259 169.744ZM485.887 167.512C486.379 166.396 487.303 165.838 488.659 165.838V167.944C487.915 167.896 487.267 168.076 486.715 168.484C486.163 168.88 485.887 169.54 485.887 170.464V175H483.943V166H485.887V167.512ZM491.924 171.328C492.068 172.012 492.398 172.54 492.914 172.912C493.43 173.272 494.06 173.452 494.804 173.452C495.836 173.452 496.61 173.08 497.126 172.336L498.728 173.272C497.84 174.58 496.526 175.234 494.786 175.234C493.322 175.234 492.14 174.79 491.24 173.902C490.34 173.002 489.89 171.868 489.89 170.5C489.89 169.156 490.334 168.034 491.222 167.134C492.11 166.222 493.25 165.766 494.642 165.766C495.962 165.766 497.042 166.228 497.882 167.152C498.734 168.076 499.16 169.198 499.16 170.518C499.16 170.722 499.136 170.992 499.088 171.328H491.924ZM491.906 169.744H497.198C497.066 169.012 496.76 168.46 496.28 168.088C495.812 167.716 495.26 167.53 494.624 167.53C493.904 167.53 493.304 167.728 492.824 168.124C492.344 168.52 492.038 169.06 491.906 169.744Z" fill="#0F4A7B"/>
                  </svg>
                </label>
                <input id="file-input" type="file" className="hidden" />

                {/* <div class="image-upload">
                  <label for="file-input">
                    <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"/>
                  </label>

                  <input id="file-input" type="file" />
                </div> */}

                <button className="w-[100%] h-[50px] bg-[#0F4A7B] text-white mb-[8px]" disabled={isDisabled()} >Add Smurf</button>
              </form>
            </div>
            {/*footer*/}
            {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}