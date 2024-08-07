import React from "react";
import { PuffLoader } from "react-spinners";
import "../css/Loading.css";
const Loading = () => {
  return (
    <div className="loading-overlay">
      <PuffLoader color="#FFD700" size={50} />
    </div>
  );
};

export default Loading;
