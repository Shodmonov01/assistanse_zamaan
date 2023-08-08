import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Home/Slider";
import "./Affair.css";
import uslug from "../../Images/servic/assistance.jpg";

const Affair = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="affair__hero">
        <div className="container">
          <div className="affair__hero__box2" data-aos="flip-left">
            <img src={uslug} alt="" />
          </div>
        </div>
      </div>
      <div className="med__affiar" data-aos="fade-right">
        <div className="container">
          <div className="med__affiar__name">Медицинский ассистанс</div>
          <div className="med__affiar__cards">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores? Tempore iure et fuga placeat quas suscipit! Natus iusto rem qui odio vero expedita</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
          </div>
        </div>
      </div>
      <div className="med__affiar" data-aos="fade-left">
        <div className="container">
          <div className="med__affiar__name">Юридический ассистанс</div>
          <div className="med__affiar__cards">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
          </div>
        </div>
      </div>
      <div className="med__affiar" data-aos="fade-right">
        <div className="container">
          <div className="med__affiar__name">Технический ассистанс</div>
          <div className="med__affiar__cards">
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
          </div>
        </div>
      </div>
      <div className="med__affiar" data-aos="fade-left">
        <div className="container">
          <div className="med__affiar__name">Персоналный ассистанс</div>
          <div className="med__affiar__cards">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quam officiis, dolores ab obcaecati asperiores</p>
          </div>
        </div>
      </div>
      <div className="affair__slider" data-aos="fade-right">
        <Slider />
      </div>
    </>
  );
};

export default Affair;
