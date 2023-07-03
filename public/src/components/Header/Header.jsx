import React, {useState} from 'react';
import movie from '../../static/img/movie.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import {Link} from "react-router-dom";
import Login from "./Login";
import Search from "./Search";

const Header = () => {

    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    const [searchValue, setSearchValue] = useState('')

    return (
        <div>
            <header>
                <div className="header_div d-flex col-12">
                    <FontAwesomeIcon icon="fa-brands fa-font-awesome" />
                    <div className="col-2 ps-5">
                        <Link to="http://localhost:3000/" title="На головну"><img className="movie_icon" src={movie} alt="На головну" /></Link>
                    </div>
                    <div className="center_block col-8 d-flex justify-content-center align-items-center">
                        <a className="me-3" href="#">ФІЛЬМИ</a>
                        <a className="me-3" href="#">СЕРІАЛИ</a>
                        <a className="me-3" href="#">МУЛЬТФІЛЬМИ</a>
                        <a className="me-3" href="#">ПІДБІРКИ</a>
                        <a className="me-3" href="#">СПІЛЬНОТА</a>
                        <a className="me-3" href="#">АНОНСИ</a>
                        <a className="me-3" href="#">2023</a>
                        <a href="#">ТОП 100</a>
                    </div>
                    <div className="right_block col-2 me-5 d-flex align-items-center justify-content-start">
                        <p className="right_block_find me-3 ms-3 mb-0" onClick={() => {setOpen(!open)}}><FontAwesomeIcon className={open ? "me-3 icon_find_active" : "me-3 icon_find"} icon={faMagnifyingGlass} style={{color: "#ffffff",}} /></p>
                        <div className="block">
                            <a className="d-flex align-items-center flex-row" href="#" onClick={() => {setVisible(!visible)}}><FontAwesomeIcon className="icon_user me-2" icon={faUser} style={{color: "#ffffff",}} /><p>Авторизація</p></a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="fake_footer"></div>
            <div className={`dropdown_menu ${open? "active" : "inactive"}`}>
                <div className="dropdown_menu_div">
                    <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
                </div>
            </div>
            <div className={`dropdown_auth ${visible? "active_div" : "inactive_div"}`}>
                <Login visible={visible} setVisible={setVisible}></Login>
            </div>
        </div>

    );
};

export default Header;