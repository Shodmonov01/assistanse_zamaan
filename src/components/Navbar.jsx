import React, { useState } from "react";
import NavbarLogo from "../Images/navbar-logo.png";
import "../Styles/Navbar.css";
import burger from "../Images/burger.png";
import Modal from "./Burger/Burger";
import { Link } from "react-router-dom";

export default function Navbar({changeLang}) {
  const [isBoll, setIsBool] = useState(false);
  const [fix , setFix] = useState(false);
  
  const setFixced = () => {
    if(window.scrollY > 700){
      setFix(true);
    }else{
      setFix(false);
    }
  } 
  window.addEventListener("scroll", setFixced);

  const changeLanguageHandler = (e) =>{
    changeLang(e.target.value);
  }
  const changeIsModal = (bool)=>{
    setIsBool(bool);
  }

  return (
    <nav className={fix ? "fixed navbar" : "navbar"}>
      <div className="container">
        <section className="nav-bar">
          <ul className="navbar-list">
            <Link to="/">
              <img className="navbar-logo" src={NavbarLogo} alt="" />
            </Link>
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Главная</Link>
            </li>
            <li className="navbar-item">
              <Link to="/news" className="navbar-link">Новости</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">Услуги</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">О нас</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Контакты</Link>
            </li>
            <li className="navbar-item">
              <Link to="/partners" className="navbar-link">Партнёры</Link>
            </li>
            <li className="navbar-item">
              <Link to="/help" className="navbar-link">Докумениы</Link>
            </li>
          </ul>
          <ul className="navbar-info">
            <select className="navbar-info__language" name="language" id="language" onClick={changeLanguageHandler}>
              <option className="language" value="ru">ru</option>
              <option className="language" value="uz">uz</option>
            </select>
          </ul>
          <img className="false" src={burger} onClick={()=>changeIsModal(true)} alt="burger"/>
         <Modal changeIsModal={changeIsModal} isBoll={isBoll}/>
        </section>
      </div>
    </nav>
  );
}
