import React from "react";
// import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import { API_URL } from '../../constants'

class ImageUploads extends React.Component {

    state = {
        image: {} 
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        let body = new FormData()
        body.append("image", this.state.image)
        body.append("id", this.props.id)
        fetch(API_URL + '/image_upload', {
            method: "PUT",
            body
        })
        .then(res => res.json())
        .then(json => {
        })
        .catch(error => {
        })
    }
    render() {
        return (
            <>
                <div className="image-form">
                    <h3>Image Upload</h3>
                    <form id="edit-img-form" className="image-form__form" action="" onSubmit={this.onSubmit}>
                        <label>Image Upload</label>
                        <input type="file" name="image" onChange={this.onChange} accept="image/*" />
                        <br />
                        <input type="submit" />
                    </form>
                </div>
                {/* <div className="user-image-square" >
                    <Image publicId="front_face.png" secure="true" cloud_name="disrdstvg" />
                </div> */}
            </>
        )
    }
}

export default ImageUploads;
