import React from "react";
import "../../Styles/Contact.css";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="container">
        <div className="contact-info" 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
          <div className="contact-info__info">
            <div className="contact-texts">
              <h3 className="contact-info__info-title">contact</h3>
              <p className="contact-info__info-text">Lorem, ipsum dolor.</p>
            </div>

            <div className="contact-contact">
              <div className="contact-adddres-info">
                <p className="contact-addres-title">Map</p>
                <p className="contact-addres-text">adress</p>
              </div>
              <div className="contact-adddres-info">
                <p className="contact-addres-title">Tel</p>
                <p className="contact-addres-text">+998 97 8516060</p>
              </div>
            </div>
            <div className="contact-contact">
              <div className="contact-adddres-info">
                <p className="contact-addres-title__map">Follow</p>
                <p className="contact-addres-text__map contact-addres-text__map__links">
                  <div>
                    <a target="" href="https://www.instagram.com/assistance.uzb/?igshid=YmMyMTA2M2Y%3D">
                      Instagram
                    </a>
                    <a target="" href="https://t.me/assistance_uzb">Telegram</a>
                  </div>
                  <div>
                    <a target="" href="https://www.facebook.com/assistanceuzb">Facebook</a>
                    <a href="https://www.youtube.com/channel/UC1iuUOmZnP1LCce8_b7WIlg">
                      YouTube
                    </a>
                  </div>
                </p>
              </div>

              <div className="contact-adddres-info">
                <p className="contact-addres-title">Pochta</p>
                <p className="contact-addres-text">assist@uzbekinvest.uz</p>
              </div>
            </div>
          </div>
          <iframe  className="contact-map"   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.660160057668!2d69.20915560486982!3d41.28363127017464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b36a50c9793%3A0x995b33e6f8b66565!2s%22Uzbekinvest%22%20Export-Import%20Insurance%20Company!5e0!3m2!1sen!2s!4v1661850027544!5m2!1sen!2s" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
