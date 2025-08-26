import React from "react";
import "../css/Header.css";
import user from "../img/icon.jpg";
import { faMoon } from "@fortawesome/free-regular-svg-icons"; // o 'free-solid-svg-icons' si prefieres el icono sólido
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
export const Header: React.FC = () => {
  return (
    <div className="header">
      <header className="header-info">
        <div className="header-left">
          <h1>SM</h1>
          <h2>Dashboard | Collaborator</h2>
        </div>
        <div className="header-right">
          <div className="header-modes">
            <div className="header-modes__icons">
              {/* <FontAwesomeIcon icon={faMoon} className="mode-icon" /> */}
            </div>
            <div className="header-modes__icons">
              {/* <FontAwesomeIcon icon={faRegistered} className="mode-icon" /> */}
            </div>
          </div>
          {/* <img src="../img/logo.png" alt="logo" /> */}
          <div className="info-user">
            <img className="info-user__icon" src={user} alt="user" />
            <div>
              <p>Demo User</p>
              <span>Colaborator</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
