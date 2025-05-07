import React, {useState} from "react";
import CustomModal from '../../modal/modal';
import ContentEditor from './editor/editor';
import AuthorPages from './pages/page';
import './author-product.css';

export default function AuthorProduct(){    
    const [toggleModal, setToggleModal] = useState(false);
    
    const showImageModal = () => {
        setToggleModal(!toggleModal);
    }
    return(
        <>
            <div className="author-container d-flex my-3">
                <AuthorPages />
                <div className="auth-right-panel">
                    <div className="auth-right-panel-container">
                        <div className="heading-bar d-flex justify-content-between mb-2">
                            <h4>Author Content</h4>
                            <button type="button" onClick={showImageModal} id="" className="ds-btn ds-btn--link">
                                <span className="material-icons-outlined ds-btn--icon ds-btn--icon__start" aria-hidden="true">add</span>Image to content
                            </button>
                        </div>
                        {
                            !!toggleModal ? <CustomModal showImageModal={showImageModal} /> : null
                        }
                        <ContentEditor />
                    </div>
                </div>
            </div>
        </>
    )
}