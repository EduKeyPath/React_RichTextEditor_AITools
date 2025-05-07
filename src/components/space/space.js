import React, {useState} from "react";
import { useParams } from "react-router-dom";
import './space.css';
import SpaceMenu from './space-menu';
import Courses from './courses';
import CreateCourses from './create-course/create-course';


export default function SpaceComponent(){
    const [toggleMenu, setToggleMenu] = useState(true);
    const routeName = useParams();
    const loadPage = routeName.view;
    
    const showFullMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return(
        <>
            <section className="space-page d-flex">
                <div className={"space-left-sec " + (toggleMenu ? '' : 'small')}>
                    <SpaceMenu showMenu={showFullMenu} toggleMenu={toggleMenu} />
                </div>
                <div className={"space-right-sec " + (toggleMenu ? '' : 'large')}>
                    {
                        !!loadPage && loadPage === 'books' ?
                        <Courses />
                        : null
                    }
                    {
                        !!loadPage && loadPage === 'create-book' ?
                        <CreateCourses />
                        : null
                    }
                </div>
            </section>
        </>
    )
}