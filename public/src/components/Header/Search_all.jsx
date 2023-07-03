import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchItem from "./Search_item";

const SearchAll = ({ searchValue }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/allmovie/?format=json')
        .then(res => {
            setItems(res.data['model_1'].concat(res.data['model_2']))
        })
        .catch(err => console.log(err))
    }, [])

    const search_items = items.filter(el => {
        if (el.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    }).map((el) => <SearchItem item={el} key={el.slug} />)

    const title_arr = items.map((el) => el.title.toLowerCase())
    const finder = title_arr.filter(el => el.toLowerCase().includes(searchValue.toLowerCase()))

    if (searchValue.length > 2 && finder.length !== 0)
        return (
            <div className="search_block">
                {search_items}
            </div>
        );
    if (searchValue.length > 2 && finder.length === 0)
        return <p className="nothing_search_block">Нічого не знайдено за цим запитом.</p>

};

export default SearchAll;