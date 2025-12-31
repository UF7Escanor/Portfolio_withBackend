import React from "react";

interface LineProps {
  orientation?: "vertical" | "horizontal";
  thickness?: string;
  color?: string;
}

const Line: React.FC<LineProps> = ({
  orientation = "horizontal",
  thickness = "2px",
  color = "bg-gray-300",
}) => {
  return (
    <div
      className={`relative ${
        orientation === "vertical" ? "h-full w-4" : "w-full h-4"
      }`}
    >
      <div
        className={`absolute ${color} ${
          orientation === "vertical"
            ? "top-0 left-1/2 h-full -translate-x-1/2"
            : "left-0 top-1/2 w-full -translate-y-1/2"
        }`}
        style={{
          width: orientation === "vertical" ? thickness : "100%",
          height: orientation === "horizontal" ? thickness : "100%",
        }}
      />
    </div>
  );
};

export default Line;
