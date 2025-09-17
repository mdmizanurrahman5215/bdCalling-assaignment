import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const GoogleButton = () => {
  return (
     <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 mt-4 hover:bg-gray-50 transition"
              >
                <FcGoogle className="mr-2 text-xl" />
                Continue with Google
              </button>
  )
}

export default GoogleButton