import React, {useEffect, useState} from 'react';
import axios from "axios";
import Items from "./Items";


const Films = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/films/?format=json')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <div className="films_top_block">
                <p className="ps-5">Новинки світового прокату</p>
            </div>
            <Items items={items}></Items>
        </div>
    );
};

export default Films;