import React from 'react';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function StoryForm() {

    const onSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_1bghah9', 'template_c40hi27', e.target, 'user_gEdomN1uPIxGwzSJ9gWdL')
        .then(res => {
            Swal.fire({
                title: 'Email Successfully Sent',
                icon: 'success'
            })
            e.target.reset()
        })
        .catch(err => {
            Swal.fire({
                title: `Email Failed to Send, ${err.text}`,
                icon: 'error'
            })
            console.error('Email Error:', err)
        })
    }

    return (
        <div className="story-form-submission">
            <h2>Contact Us / Contacta Con Nosotros</h2>
            <form onSubmit={onSubmit} >
                <div className="story-form-field">
                    <label htmlFor="fromName" >NAME / NOMBRE: </label>
                    <input id="fromName" type="text" name="fromName" className="" />
                </div>

                <div className="story-form-field">
                    <label htmlFor="replyTo" >EMAIL / CORREO DE ELECTRONICA: </label>
                    <input id="replyTo" type="email" name="replyTo" className="" />
                </div>

                <div className="story-form-field">
                    <label htmlFor="phoneNumber">PHONE / TELEPHONO: </label>
                    <input id="phoneNumber" type="text" name="phoneNumber" className="" />
                </div>

                <div className="story-form-field">
                    <label htmlFor="message" >MESSAGE / MENSAJE:</label><br />
                    <textarea id="message" type="textarea" cols="60" rows="20" name="message" className="" ></textarea>
                </div>

                <div>
                    <button type='submit'>SUBMIT / ENVIAR</button>
                </div>
            </form>
            
        </div>
    );
}

export default StoryForm;