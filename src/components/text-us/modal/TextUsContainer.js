import React, { useState } from "react";
import ModalTextUs from "./ModalTextUs";
import TextUsButton from "../TextUsButton";

export const TextUsContainer = (props) => {
    const [isShown, setIsShown] = useState(false);

    let modal;

    const showModal = () => {
        setIsShown(true);
        toggleScrollLock();
    };

    const closeModal = () => {
        setIsShown(false);
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
        <div className="text-us-subtext">
            <TextUsButton
                showModal={showModal}
                textUsTriggerText={props.textUsTriggerText}
            />
            {isShown
                ? 
                    (
                        <ModalTextUs
                            onSubmit={props.onSubmit}
                            modalRef={(n) => (modal = n)}
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

export default TextUsContainer;
