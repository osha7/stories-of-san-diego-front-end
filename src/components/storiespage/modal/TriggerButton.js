import React from "react";

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
    return (
        <button
            className="btn-edit"
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </button>
    );
};

export default TriggerButton;
