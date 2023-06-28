import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Items from "./Items";



const FilmPage = () => {

    const [items, setItems] = useState([])
    const [season, setSeason] = useState([])
    const [season_num, setSeasonNum] = useState(0)
    const [season_number, setSeasonNumber] = useState({index : 0})
    const [urlLink, setUrlLink] = useState([])
    const id = window.location.href.split('/')[4]

    const changeSeason = (e) => {
        setSeasonNumber({index : e.currentTarget.innerText.split("Сезон")[1] - 1})
    }
    console.log(season)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/serial/' + id + '/?format=json')
        .then(res => {
            setItems(res.data)
            setSeason(res.data['video'][season_number.index])

            setSeasonNum(res.data['video'].length)

            let url = res.data['video'][season_number.index].link
            let urls = url.split(';')
            setUrlLink(urls)
        })
        .catch(err => console.log(err))
    }, [season_number])





    return (
        <div>
            <Header></Header>
            <Items items={items} season={season} urllink={urlLink} season_num={season_num} change={changeSeason} season_number={season_number}></Items>
            <Footer></Footer>
        </div>
    );
};

export default FilmPage;