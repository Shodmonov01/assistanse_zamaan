import React, { useEffect } from "react";
import Slider from "../../components/Home/Slider";
import "./Partners.css";
import arrowRed from "../../Images/link_red_arrow.png";
import ArrowRed from "../../Images/arrow__RED.png";
import { Link, useLocation } from "react-router-dom";

const Partners = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="partners">
      <div className="container">
        <div className="partners__box" data-aos="fade-up">
          <h2 className="partners__h2">Наши партнеры</h2>
          <div className="partners__box__1">
            <div className="partners__box__1__info">
              <h3>Основными преимуществами компании являются</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores? Tempore iure et fuga placeat quas suscipit! Natus iusto rem qui odio vero expedita voluptatum repellendus non, esse, voluptates sunt distinctio, velit magni repudiandae id?</li>
                <li>
                  <Link className="us" to="/contact">
                    Contact us <img src={arrowRed} alt="arrow_red" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="partners__box__div" data-aos="fade-down">
          <div className="partners__div">
            <h3>Aria</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="https://ariainsurance.uz/uz/">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
          <div className="partners__div">
            <h3>Avtoritet</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="https://avtoritetgroup.uz/uz/">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
          <div className="partners__div">
            <h3>O'zbekinvest</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="https://uzbekinvest.uz/uz/">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
          <div className="partners__div">
            <h3>INGO Uzbekistan</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="https://ingo.uz/">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
          {/*  */}
          <div className="partners__div">
            <h3>"EURASIA ASSISTANCE"</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="https://www.eurasia-assistance.com/">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
          <div className="partners__div">
            <h3>REMED ASSISTANCE</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="https://www.remedassistance.com/ru">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
          <div className="partners__div">
            <h3>GLOBAL VOYAGER ASSISTANCE</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="https://gvassistance.com/">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
          <div className="partners__div">
            <h3>MISSADENA Co ltd</h3>
            <p>Lorem ipsum dolor sit</p>
            <div>
              <a href="http://www.missadena.com/">
                <img src={ArrowRed} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Partners;
