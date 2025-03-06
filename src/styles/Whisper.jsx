import React from "react";

const Whisper = ({children}) => {
    return (
        <span className="font-whisper text-orange-600 text-5xl inline-block leading-tight">
            {children}
        </span>
    );
};

export default Whisper;
