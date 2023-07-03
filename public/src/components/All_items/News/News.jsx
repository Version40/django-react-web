import React, {useEffect, useState} from 'react';
import axios from "axios";
import NewsItems from "./News_items";

const News = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/news/?format=json')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <NewsItems items={items}></NewsItems>
        </div>
    );
};

export default News;