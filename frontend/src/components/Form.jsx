import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant.js";

const Form = () => {
  // to store the value from frontend
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userDesignation, setUserDesignation] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userProfile, setUserProfile] = useState("");
  console.log(userName, userEmail, userDesignation, userPhone, userAddress, userProfile);

  // function to send data to backend
  const submitData = async () => {
    const data = {
      name: userName,
      email: userEmail,
      designation: userDesignation,
      phone: userPhone,
      address: userAddress,
      profile: userProfile
    };
    console.log(data)
    const res = await axios.post(`${USER_API_END_POINT}/createUser`, data);
    console.log(res);
  };

  // To handle the default
  const handleSubmit = (e) => {
    e.preventDefault();
    // To submit data
    submitData();
    // but empty the previous details
    // setUserName("");
    // setUserEmail("");
    // setUserDesignation("");
    // setUserPhone("");
    // setUserAddress("");
    // setUserProfile("");
  };

  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Create User
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto border border-gray-400 shadow-lg p-4 rounded-lg">
              <div className="flex flex-wrap -m-2">
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="designation"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Designation
                    </label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userDesignation}
                      onChange={(e) => setUserDesignation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="address"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userAddress}
                      onChange={(e) => setUserAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-1 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="profile"
                      className="leading-7 text-sm text-gray-600"
                    >
                      ProfilePhoto
                    </label>
                    <input
                      type="text"
                      id="profile"
                      name="profile"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userProfile}
                      onChange={(e) => setUserProfile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Form;
