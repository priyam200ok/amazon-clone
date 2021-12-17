import React from "react";
const DividerWithText = ({ children }) => {
  return (
    <div className="container">
      <div className="border" />
      <span className="content">{children}</span>
      <div className="border" />
    </div>
  );
};
export default DividerWithText;
