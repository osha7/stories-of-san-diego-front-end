// 2

import React, { useState } from "react";
import Modal from "../components/contact/ModalSubmitStory";
import TriggerButton from "../components/TriggerButton";

export const ContactModal = (props) => {
    const [isShown, setIsShown] = useState(false)

    const showModal = () => {
        setIsShown(true)
        // closeButton.focus()
        toggleScrollLock();
    };

    const closeModal = () => {
        setIsShown(false)
        TriggerButton.focus();
        toggleScrollLock();
    };

    const onKeyDown = (event) => {
        if (event.keyCode === 27) {
            closeModal();
        }
    };

    const onClickOutside = (event) => {
        // if (modal && modal.contains(event.target)) return;
        //     closeModal();
    };

    const toggleScrollLock = () => {
        document.querySelector("html").classList.toggle("scroll-lock");
    };

        return (
            <>
                {/* <TriggerButton showModal={showModal} buttonRef={(n) => (TriggerButton = n)} triggerText={props.triggerText} /> */}
                {isShown ? (
                    <Modal
                        // modalRef={(n) => (modal = n)}
                        // buttonRef={(n) => (closeButton = n)}
                        closeModal={closeModal}
                        onKeyDown={onKeyDown}
                        onClickOutside={onClickOutside}
                    />
                ) : null}
            </>
        );
}

export default ContactModal;
