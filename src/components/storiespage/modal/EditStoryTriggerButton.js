import React from "react";

const EditStoryTriggerButton = ({ triggerText, buttonRef, showModal }) => {
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

export default EditStoryTriggerButton;
