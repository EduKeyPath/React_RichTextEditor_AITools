import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import callApi from '../../../helper/api';
import CoursesItem from './courses';
import '../space.css';


export default function Courses(){
    const history = useHistory();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
          const response = await callApi('GET', '/data.json');
          const res = response.data.data;
          setProductList(res.product)
        } catch (error) {
          console.error(error);
        }
    }

    const menuRedirect = (menuName) => {
        history.push(menuName);
    }
    
    return(
        <>
            <section className="space-container">
                <div className="container-bar">
                    <h2>Books</h2>
                    <button className="ds-btn ds-btn--secondary" onClick={() => menuRedirect('/space/create-book')}>
                        <span className='material-icons-outlined ds-btn--icon ds-btn--icon__start' aria-hidden='true'>add</span> Create Book
                    </button>
                </div>
                <div className="spcae-container-inner p-2">
                    {
                        (!!productList.length) ?
                        productList.map((item, k) => {
                            return (
                                <CoursesItem key={k} product={item} />
                            )
                        })
                        : <div className="alert alert-primary text-center" role="alert">No Products</div>
                    }
                </div>
            </section>
        </>
    )
}