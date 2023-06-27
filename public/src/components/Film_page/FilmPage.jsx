import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Items from "./Items";

const FilmPage = () => {

    const [items, setItems] = useState([])
    const id = window.location.href.split('/')[4]

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/movie/' + id + '/?format=json')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <Header></Header>
            <Items items={items}></Items>
            <Footer></Footer>
        </div>
    );
};

export default FilmPage;