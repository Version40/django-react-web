import React, {useEffect, useState} from 'react';
import axios from "axios";
import Items from "./Items";

const Serials = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/serials/?format=json')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="serials_top_block">
                <p>Актуальні серіали</p>
            </div>
            <Items items={items}></Items>
        </div>
    );
};

export default Serials;