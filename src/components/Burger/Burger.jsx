import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

const Burger = ({ changeIsModal, isBoll }) => {

  const changeModal = ( bool) => {
    changeIsModal(bool);
  }
  
  return (
    <div className={isBoll ? "modal__2" : "modal"}>
        <div className={isBoll ? "modal-content__2" : "modal-content"}>
          <p className="close"><span onClick={()=>changeModal(false)}>&times;</span></p>
          <ul className="modal-menu"> 
            <li className="navbar-item">
              <Link to="/" onClick={()=>changeModal(false)} className="navbar-link">Главная</Link>
            </li>
            <li className="navbar-item">
              <Link to="/news" onClick={()=>changeModal(false)} className="navbar-link">Новости</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" onClick={()=>changeModal(false)} className="navbar-link">Услуги</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" onClick={()=>changeModal(false)} className="navbar-link">О нас</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" onClick={()=>changeModal(false)} className="navbar-link">Контакты</Link>
            </li>
            <li className="navbar-item">
              <Link to="/partners" onClick={()=>changeModal(false)} className="navbar-link">Партнёры</Link>
            </li>
            <li className="navbar-item">
              <Link to="/help" onClick={()=>changeModal(false)} className="navbar-link">Докумениы</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Burger;
