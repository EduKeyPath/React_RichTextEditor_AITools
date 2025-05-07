import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './space.css';


export default function SpaceMenu(props){
    const history = useHistory();

    const [list] = useState([
        { id: 1, name : 'Books', icon : 'featured_play_list', routeLink : '/space/books' },
        { id: 2, name : 'Collections', icon : 'library_books', routeLink : '/space/books' },
        { id: 3, name : 'Downloads', icon : 'file_download', routeLink : '/space/books' },
        { id: 4, name : 'Favourites', icon : 'grade', routeLink : '/space/books' },
        { id: 5, name : 'Drafts', icon : 'book', routeLink : '/space/books' },
        { id: 6, name : 'Bookmarks', icon : 'bookmark_added', routeLink : '/space/books' },
        { id: 7, name : 'Reports', icon : 'analytics', routeLink : '/space/books' },
    ]);

    const menuRedirect = (menuName) => {
        history.push(menuName);
    }

    return(
        <>
        
            <button onClick={props.showMenu} type="button" className="ds-btn toggle-menu ds-btn--secondary ds-btn-icon mb-2">
                <span className="material-icons-outlined ds-btn__icon" aria-hidden="true">menu</span>
            </button>
            {
                !!list ?
                    <div className="list-group">
                        {
                            list.map((item, i) => (
                                <button
                                    className={"list-group-item list-group-item-action " + (i === 0 ? "active" : "")}
                                    key={i}
                                    type="button"
                                    onClick={() => menuRedirect(item.routeLink)}
                                >
                                    <span className="material-icons-outlined list-icon">
                                        {item.icon}
                                    </span>
                                    {
                                        !!props.toggleMenu ?
                                        <span className="menu-name">{item.name}</span>
                                        : null
                                    }
                                </button>
                            ))
                        }
                    </div>
                    : null
            }
        </>
    )
}