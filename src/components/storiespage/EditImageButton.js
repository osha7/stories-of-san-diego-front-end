import React from 'react';

const EditImageButton = ({showImageEditModal, buttonRef, editImageTriggerText}) => {
    return (
        <button
            className="btn-edit"
            ref={buttonRef}
            onClick={showImageEditModal}
        >
            {editImageTriggerText}
        </button>
    );
}

export default EditImageButton;