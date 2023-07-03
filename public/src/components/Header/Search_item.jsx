import React from 'react';
import {Link} from "react-router-dom";

const SearchItem = (props) => {

    return (
        <div className="search_item_block">
            <Link className="d-flex text-decoration-none" to={props.item.type + '/' + props.item.slug}>
                <div className="search_movie_image_block">
                    <img className="search_movie_image" src={require('../../static/image_movie/' + props.item.image)} alt={props.item.title}  />
                </div>
                <div className="search_movie_text_block">
                    <p className="search_movie_text">{props.item.title}</p>
                </div>
            </Link>
        </div>
    );
};

export default SearchItem;