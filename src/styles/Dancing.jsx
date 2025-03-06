import React from "react";

const Dancing = ({children}) => {
    return (
        <span className="font-dancing text-orange-600 text-5xl inline-block leading-tight">
            {children}
        </span>
    );
};

export default Dancing;
