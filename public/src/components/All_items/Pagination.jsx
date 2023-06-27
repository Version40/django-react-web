import React, {useState} from 'react';
import './Allitems.css';

const Pagination = ({ itemsPerPage, totalItems, paginate, prevPage, nextPage, currentPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="paginations pb-4 d-flex flex-row">
            <div className="col-2"></div>
            <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="page_wrapper d-flex">
                    <button className="buttons" onClick={prevPage} disabled={currentPage <= 1 ? true : false}>Назад</button>
                    {
                        pageNumbers.map(number => (
                            <p className="page-item" key={number}>
                                <a href="javascript://" className={currentPage === number ? 'page page_current' : 'page'} onClick={() => paginate(number)}>
                                    {number}
                                </a>
                            </p>
                        ))
                    }
                    <button className="buttons" onClick={nextPage} disabled={currentPage + 1 > Math.ceil(totalItems / itemsPerPage) ? true : false}>Далі</button>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    );
};

export default Pagination;