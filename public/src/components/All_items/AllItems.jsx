import React, {useEffect, useState} from 'react';
import axios from "axios";
import Items from "./Items";
import Pagination from "./Pagination";


const AllItems = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    useEffect(() => {
        setLoading(true)
        axios.get('http://127.0.0.1:8000/api/allmovie/?format=json')
        .then(res => {
            setItems(res.data['model_1'].concat(res.data['model_2']))
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])


    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItem = items.slice(firstItemIndex, lastItemIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage( prev => prev + 1)
    const prevPage = () => setCurrentPage( prev => prev - 1)

    return (
        <div>
            <div className="movie_top_block">
                <p className="ps-5">Останні надходження</p>
            </div>
            <Items items={currentItem} loading={loading}></Items>
            <Pagination currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} paginate={paginate} itemsPerPage={itemsPerPage} totalItems={items.length}></Pagination>
        </div>
    );
};

export default AllItems;