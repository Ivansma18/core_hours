import React from "react";
import "../css/Sidebar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-regular-svg-icons"; // o 'free-solid-svg-icons' si prefieres el icono sólido
import { faClock } from "@fortawesome/free-regular-svg-icons";

export const Sidebar : React.FC = () => {
    return (
        <aside className="sidebar">
            
            <div className="sidebar-nav">
                <div className="sidebar-nav__icons">
                    {/* <FontAwesomeIcon icon={faHouse} className="nav-icon" /> */}
                </div>
                <div className="sidebar-nav__icons">
                    {/* <FontAwesomeIcon icon={faClock} className="nav-icon" /> */}
                </div>
            </div>
        </aside>
    );
};
