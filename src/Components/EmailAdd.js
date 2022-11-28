import React from "react";
import "../CSS/EmailAdd.css"
const EmailAdd = ({ email, type }) => {
  return (
    <div className="EmailAdd">
      <p>
        {type}: {email}
      </p>
    </div>
  );
};

export default EmailAdd;
