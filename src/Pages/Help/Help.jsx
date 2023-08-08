import React from "react";
import Slider from "../../components/Home/Slider";
import "./Help.css";

const Help = () => {
  return (
    <>
      <div className="help">
        <div className="container">
          <h2>Документы</h2>
          <ul className="documentlar">
            <li>
              <a>O‘RQ-684 22.04.2021 </a>
              <p> Lorem, ipsum dolor. </p>
            </li>
            <li>
              <a>O‘RQ-730 23.11.2021 </a> 
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <a>YTH xabarnoma blankasi </a> 
              <p>Lorem, ipsum dolor.</p> 
            </li>
            <li>
              <a>Fuqarolik kodeksi </a> 
              <p>Lorem, ipsum dolor.</p> 
            </li>
          </ul>
        </div>
      </div>
      <div data-aos="flip-down">
        <Slider />
      </div>
    </>
  );
};

export default Help;
