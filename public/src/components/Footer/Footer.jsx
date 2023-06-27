import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faViber } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import film from '../../static/img/film.png'

const Footer = () => {
    return (
        <div className="footer d-flex col-12 justify-content-center align-items-center">
            <div className="col-1">
                <img className="film_icon d-flex " src={film} alt="film_icon" />
            </div>
            <div className="col-8 d-flex flex-column justify-content-center align-items-start">
                <div className="d-flex flex-row block_link">
                    <p>KINO.CLUB</p>
                    <a href="#" className="text">Правовласникам</a>
                    <a href="#" className="text">Новини</a>
                    <a href="#" className="text">Фільми торент</a>
                    <a href="#" className="text">Музика з фільмів</a>
                </div>
                <div>
                    <p>ЮаКіно - в нас найбільше фільмів онлайн українською мовою в найкращій якості HD 1080, 720p!</p>
                </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-start">
                <a href="#"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon className="icon" icon={faTelegram} /></a>
                <a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon className="icon" icon={faViber} /></a>
            </div>
        </div>
    );
};

export default Footer;