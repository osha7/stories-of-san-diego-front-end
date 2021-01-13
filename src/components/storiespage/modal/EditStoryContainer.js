// import React, { Component } from "react";
// import TriggerButton from "./TriggerButton";
// import Modal from "./Modal";

// export class EditStoryContainer extends Component {
    
//     state = { isShown: false };
//     showModal = () => {
//         this.setState({ isShown: true }, () => {
//             this.closeButton.focus();
//         });
//         this.toggleScrollLock();
//     };
//     closeModal = () => {
//         this.setState({ isShown: false });
//         this.TriggerButton.focus();
//         this.toggleScrollLock();
//     };
//     onKeyDown = (event) => {
//         if (event.keyCode === 27) {
//             this.closeModal();
//         }
//     };
//     onClickOutside = (event) => {
//         if (this.modal && this.modal.contains(event.target)) return;
//         this.closeModal();
//     };
//     toggleScrollLock = () => {
//         document.querySelector("html").classList.toggle("scroll-lock");
//     };
//     render() {
//         // console.log(this.props)
//         return (
//             <React.Fragment>
//                 <TriggerButton
//                     showModal={this.showModal}
//                     buttonRef={(n) => (this.TriggerButton = n)}
//                     triggerText={this.props.triggerText}
//                 />
//                 {this.state.isShown ? (
//                     <Modal
//                         onSubmit={this.props.onSubmit}
//                         modalRef={(n) => (this.modal = n)}
//                         buttonRef={(n) => (this.closeButton = n)}
//                         closeModal={this.closeModal}
//                         onKeyDown={this.onKeyDown}
//                         onClickOutside={this.onClickOutside}
//                         data={this.props.data}
//                     />
//                 ) : null}
//             </React.Fragment>
//         );
//     }
// }
// export default EditStoryContainer;

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