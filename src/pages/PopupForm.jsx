import React, { useEffect, useState } from "react";

function PopupForm() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // 10000 ms = 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center  bg-gray-200">
      {/* Button to open modal */}
      {/* <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Register Now
      </button> */}

      {/* Modal */}
      {showModal ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto relative">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>

              {/* Modal content */}
              <h2 className="text-2xl font-bold mb-4">Register Now To Apply</h2>
              <p className="text-sm text-gray-500 mb-6">
                Get details and latest updates.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City You Live In
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your city"
                  />
                </div>

                <div className="flex items-center">
                  <label className="text-sm font-medium text-gray-700">
                    Looking For Online/Distance Course?
                  </label>
                  <input
                    type="checkbox"
                    className="ml-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default PopupForm;