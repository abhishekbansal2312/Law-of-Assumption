import React from "react";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen m-14">
      {/* Left Image Section */}
      <div className="w-1/2 bg-gray-800">
        <img
          src="/api/placeholder/600/800"
          alt="Woman studying with notebook and laptop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-1/2 bg-yellow-50 flex flex-col justify-center items-center px-16">
        <div className=" max-w-md">
          <h1 className="text-3xl font-bold mb-10 text-gray-800 mt-4">
            Sign up for Law of Assumption
          </h1>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-gray-700">
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none bg-white"
                >
                  <option disabled selected>
                    Select...
                  </option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>India</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="block text-gray-700">
                City
              </label>
              <div className="relative">
                <select
                  id="city"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none bg-white"
                >
                  <option disabled selected>
                    Select...
                  </option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                  <option>Houston</option>
                  <option>Phoenix</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-gradient-to-r from-amber-400 to-amber-500 rounded-md hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
