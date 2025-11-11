import React from "react";
import "../CssComponent/loader.css"; // ✅ correct path to your CSS

const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="container">
        <div className="box">
          <div className="cube"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
