import React from 'react';

function EditImageButton(props) {

    const handleOnClick = () => {
        console.log(props)
    }

    return (
        <button
            className="btn-edit"
            onClick={handleOnClick}
        >
            EDIT IMAGE
        </button>
    );
}

export default EditImageButton;