import React from "react";
import "../Styles/Footer.css";
import Footerlogo from "../Images/footer-logo.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
    <footer>
      <div className="container">
        <div className="footer-info">
          <div className="footer-info__box1">
            <img src={Footerlogo} alt="" className="img__1"/>
          </div>

          <div className="footer-info__box2">
            <div className="footer-links">
              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/" className="footer-link">Главная</Link>
                </li>
                <li className="footer-item">
                  <Link to="/about" className="footer-link">О нас</Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/news" className="footer-link">Новости</Link>
                </li>
                <li className="footer-item">
                  <Link to="/contact" className="footer-link">Контакты</Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/services" className="footer-link">Услуги</Link>
                </li>
                <li className="footer-item">
                  <Link to="/partners" className="footer-link">Партнёры</Link>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="footer-item">
                  <Link to="/depart" className="footer-link">Отделы</Link>
                </li>
                <li className="footer-item">
                  <Link to="/help" className="footer-link">Документы</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
      <div className="amir">
        <a target="_blank" rel="noreferrer" href="https://shodmonov01.github.io/amir.io/">
          © 2023 by <span>Amir Shodmonov</span> 
        </a>
      </div>
    </>
  );
}
