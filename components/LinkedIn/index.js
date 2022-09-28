import React from "react";
import Button from "../Button";


const LinkedIn = ({ className }) => {
  return (
    <div className={`${className} inline-flex`}>

        <Button onClick={() => window.open("https://www.linkedin.com/in/talitha-kruger-3a7b07175/")}>
        <h3 className="text-lg">LinkedIn</h3>
        </Button>
    </div>
  );
};

export default LinkedIn;
