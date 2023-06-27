import React from 'react';
import './FilmPage.css'
import ReactPlayer from "react-player";


const Items = ({ items }) => {

    return (
        <div className="movie_page d-flex  pt-5">
            <div className="col-1"></div>
            <div className="col-4">
                <h4>{items.title}</h4>
                <h6>{items.title_eng}</h6>
                <div className="img_block">
                    <img className="movie_poster" src={items?.image ? require(`../../static/image_movie/${items.image}`) : require('../../static/image_movie/TheShawshankRedemption.jpg')} alt={items.title} />
                </div>
                <div className="description_block">
                    <p>Рік виходу: <span>{items.release_year}</span></p>
                    <p className="description_block_second">Країна: <span>{items.country}</span></p>
                    <p>Жанр: <span>{items.genre}</span></p>
                    <p className="description_block_second">Режисер: <span>{items.director}</span></p>
                    <p>Актори: <span>{items.actors}</span></p>
                    <p className="description_block_second">Тривалість: <span className="white">{items.duration}</span></p>
                    <p>Мова озвучення: <span className="white">{items.voicing}</span></p>
                </div>
            </div>
            <div className="col-6">
                <div className="player_top d-flex justify-content-between">
                    <div className="first_child d-flex justify-content-start align-items-center">
                        <p>UA #1</p>
                        <p>Трейлер</p>
                    </div>
                    <div className="second_child">
                        <p>Фільм не відтворюється?</p>
                    </div>
                </div>
                <div className="video_player">
                    <ReactPlayer
                        url={items.video}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                    <div className="player_bot"></div>
                </div>
                <div className="description_block_movie">
                    <h5>Про що фільм '{items.title}'</h5>
                    <p className="d-flex justify-content-start align-items-start">{items.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Items;