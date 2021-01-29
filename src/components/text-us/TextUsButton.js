import React from "react";

const TextUsButton = ({ textUsTriggerText, buttonRef, showModal }) => {
    return (
        <button
            className="btn-text-us"
            ref={buttonRef}
            onClick={showModal}
        >
            {textUsTriggerText}
        </button>
    );
};

export default TextUsButton;