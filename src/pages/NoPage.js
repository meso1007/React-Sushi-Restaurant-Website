import React from "react";
import { Link } from "react-router-dom";
import "../css/nopage.css";

const NoPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-center p-5">
      <h1 className="main-title err-msg font-bold text-brightcolor">OOpsy!</h1>
      <p className="text-4xl mt-4">
        Page Not Found <span className="text-brightcolor">404</span>{" "}
      </p>
      <p className="text-lg mt-2 text-gray-600">
        The page doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-brightcolor text-white rounded-lg hover:bg-brighthovercolor"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NoPage;
