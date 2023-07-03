import React from 'react';
import './Allitems.css'
import {Link} from "react-router-dom";

const Item = (props) => {

    return (
        <div className="item_movie mb-5 me-3 ms-3">
            <div className='movie_block'>
                <Link  to={props.item.type + '/' + props.item.slug}>
                    <div className="item_border_movie">
                        <img className="play_image_movie" src={require('./play.png')} alt='play' />
                        <img className="movie_image" src={require('../../static/image_movie/' + props.item.image)} alt={props.item.title}  />
                    </div>
                </Link>
            </div>
            <div>
                <Link to={props.item.type + '/' + props.item.slug} className="link d-flex justify-content-center align-items-center m-1 text-center">{props.item.title}</Link>
            </div>
        </div>
    );
};

export default Item;