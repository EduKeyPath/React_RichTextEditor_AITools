import React from "react";
import '../author-product.css';

export default function AuthorPages(){    
    

    return(
        <>
            <div className="auth-left-panel">
                <div className="new ms-2">
                    <button type="button" className="ds-btn ds-btn--tertiary ds-btn-icon">
                        <span className='material-icons-outlined ds-btn__icon' aria-hidden='true'>add</span>
                    </button>
                </div>
                <div className="list-menu">
                    <ul className="list">
                        <li className="list-item">
                            <button type="button" className="ds-btn ds-btn--tertiary list-item-btn active">
                                <span className="btn-text">Page 1</span>
                            </button>
                        </li>
                        <li className="list-item">
                            <button type="button" className="ds-btn ds-btn--tertiary list-item-btn">
                                <span className="btn-text">Page 2</span>
                                <button type="button" className="ds-btn ds-btn--tertiary ds-btn-icon"><span className="material-icons-outlined ds-btn__icon" aria-hidden="true">delete</span></button>
                            </button>
                        </li>
                        <li className="list-item">
                            <button type="button" className="ds-btn ds-btn--tertiary list-item-btn">
                                <span className="btn-text">Page 3</span>
                                <button type="button" className="ds-btn ds-btn--tertiary ds-btn-icon"><span className="material-icons-outlined ds-btn__icon" aria-hidden="true">delete</span></button>
                            </button>
                        </li>
                        <li className="list-item">
                            <button type="button" className="ds-btn ds-btn--tertiary list-item-btn">
                                <span className="btn-text">Page 4</span>
                                <button type="button" className="ds-btn ds-btn--tertiary ds-btn-icon"><span className="material-icons-outlined ds-btn__icon" aria-hidden="true">delete</span></button>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}