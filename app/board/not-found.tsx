import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
       <div className="text-center mx-4">
        <h1 className="text-9xl font-extrabold text-gray-800 max-md:text-5xl">OOPS!</h1>
        <p className="text-2xl md:text-3xl text-gray-600 mt-4">Looks like the board you are looking for is not here!</p>
        <Link href="/dashboard" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition duration-300">Go to Dashboard</Link>
    </div>
    </div>
  );
}

export default NotFound;
