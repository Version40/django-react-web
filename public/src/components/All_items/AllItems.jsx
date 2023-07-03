import React, {useEffect, useState} from 'react';
import axios from "axios";
import Items from "./Items";
import Pagination from "./Pagination";
import News from "./News/News";


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
            <div className="movie_top_block d-flex">
                <p className="ps-5 col-8 align-content-center">Останні надходження</p>
                <p className="col-4">Новини</p>
            </div>
            <div className="movie_bottom_block d-flex">
                <div className="col-8">
                    <Items items={currentItem} loading={loading}></Items>
                    <Pagination currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} paginate={paginate} itemsPerPage={itemsPerPage} totalItems={items.length}></Pagination>
                </div>
                <div className="movie_right_block col-4">
                    <News></News>
                </div>
            </div>
        </div>
    );
};

export default AllItems;