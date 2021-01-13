import React, { useState } from "react";
import TriggerButton from "./TriggerButton";
import Modal from "./Modal";

export const EditStoryContainer = (props) => {
    
    const [isShown, setIsShown] = useState(false)
    let triggerButton
    let modal
    // let closeButton
    
    const showModal = () => {
        setIsShown(true) 
        // closeButton.focus()
        toggleScrollLock();
    };

    const closeModal = () => {
        setIsShown(false)
        triggerButton.focus();
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
            <React.Fragment>
                <TriggerButton
                    showModal={showModal}
                    buttonRef={(n) => (triggerButton = n)}
                    triggerText={props.triggerText}
                />
                {isShown ? (
                    <Modal
                        onSubmit={props.onSubmit}
                        modalRef={(n) => (modal = n)}
                        // buttonRef={(n) => (closeButton = n)}
                        closeModal={closeModal}
                        onKeyDown={onKeyDown}
                        onClickOutside={onClickOutside}
                        data={props.data}
                    />
                ) : null}
            </React.Fragment>
        );
    }

    export default EditStoryContainer;