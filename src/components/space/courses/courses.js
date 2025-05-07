import React from "react";
import { useHistory } from "react-router-dom";
import './courses.css';


export default function CoursesItem(props){
    const history = useHistory();

    const goDetails = (pId) => {
        history.push(`/product-details/${pId}`);
    }
    
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card p-2 courses-list">
                        <div className="row">
                            <div className="col-2">
                                {
                                    (props.product.isHighDemand === 'yes') ?
                                    <span className="badge rounded-pill bg-danger position-absolute high">High Demand</span>
                                    : null
                                }
                                <div className="card-img">
                                    <img src={props.product.image} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="card-body">
                                    <h2 className="card-title">{props.product.name}</h2>
                                    <p className="card-text mb-0">{props.product.des}</p>
                                    <p className="h5 mt-2">&#8377;{props.product.price}</p>
                                    <button className="ds-btn ds-btn--secondary me-2">Author</button>
                                    <button className="ds-btn ds-btn--tertiary me-2">Edit</button>
                                    <button className="ds-btn ds-btn--tertiary" onClick={() => goDetails(props.product.id)}>Public Preview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}