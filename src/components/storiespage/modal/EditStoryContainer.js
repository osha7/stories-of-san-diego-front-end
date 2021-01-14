import React, { useState } from "react";
import EditStoryTriggerButton from "../EditStoryTriggerButton";
import DeleteButton from "../DeleteButton";
import EditImageButton from "../EditImageButton";
import Modal from "./Modal";
import ImageModal from "./ImageModal";

export const EditStoryContainer = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [isImageEditModalShown, setIsImageEditModalShown] = useState(false);
    // let triggerButton
    let modal;
    // let closeButton

    const showModal = () => {
        setIsShown(true);
        // closeButton.focus()
        toggleScrollLock();
    };

    const showImageEditModal = () => {
        setIsImageEditModalShown(true);
        toggleScrollLock();
    };

    const closeModal = () => {
        setIsShown(false);
        setIsImageEditModalShown(false);
        // triggerButton.focus();
        toggleScrollLock();
    };

    const onKeyDown = (event) => {
        if (event.keyCode === 27) {
            closeModal();
        }
    };

    const onClickOutside = (event) => {
        if (modal && modal.contains(event.target)) return;
        closeModal();
    };

    const toggleScrollLock = () => {
        document.querySelector("html").classList.toggle("scroll-lock");
    };

    return (
        <div className="edit-story-div">
            <EditStoryTriggerButton
                showModal={showModal}
                triggerText={props.triggerText}
                // buttonRef={(n) => (triggerButton = n)}
            />
            <DeleteButton
                id={props.data.id}
                history={props.history}
            />
            <EditImageButton
                showImageEditModal={showImageEditModal}
                editImageTriggerText={props.editImageTriggerText}
                // buttonRef={(n) => (triggerButton = n)}
            />
            {isShown
                ? (console.log("editcontainer", props),
                    (
                        <Modal
                            onSubmit={props.onSubmit}
                            modalRef={(n) => (modal = n)}
                            // buttonRef={(n) => (closeButton = n)}
                            closeModal={closeModal}
                            onKeyDown={onKeyDown}
                            onClickOutside={onClickOutside}
                            data={props.data}
                        />
                    ))
                : null
            }
            {isImageEditModalShown
                ?
                    (
                        <ImageModal
                            onSubmit={props.onSubmit}
                            modalRef={(n) => (modal = n)}
                            // buttonRef={(n) => (closeButton = n)}
                            closeModal={closeModal}
                            onKeyDown={onKeyDown}
                            onClickOutside={onClickOutside}
                            data={props.data}
                        />
                    )
                : null
            }

        </div>
    );
};

export default EditStoryContainer;
