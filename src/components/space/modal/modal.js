import React from "react";
import ImageToText from '../create-course/author-product/image-to-text/image-to-text';
import './modal.css';

export default function CustomModal(props){ 
    return(
        <>
            <div className="custom-modal-wrap">
                <div className="custom-modal-body">
                    <div className="custom-modal-header">
                        <h2 className="custom-modal-title">Create Content</h2>
                        <button type="button" onClick={props.showImageModal} id="" className="ds-btn ds-btn--tertiary ds-btn-icon modal-close">
                            <span className="material-icons-outlined ds-btn__icon" aria-hidden="true">close</span>
                        </button>
                    </div>
                    <div className="custom-modal-content">
                        <ImageToText />
                    </div>
                    <div className="custom-modal-footer">
                        <button type="button" id="" onClick={props.showImageModal} className="ds-btn ds-btn--link me-3">Close</button>
                        <button type="button" id="" className="ds-btn ds-btn--primary">Insert to editor</button>
                    </div>                  
                </div>                
            </div>
        </>
    )
}