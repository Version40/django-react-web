import React, {useState} from 'react';
import './SerialPage.css'
import ReactPlayer from "react-player";

const Items = ({ items, season, urllink, season_num, change, season_number }) => {

    let mass = urllink

    let seasons = []
    for (let i = 0; i < season_num; i++) {
        seasons.push(i + 1)
    }


    let num = []
    for (let i = 0; i < mass.length - 1; i++) {
        num.push(i)
    }

    const [urlVideo, setUrlVideo] = useState({index : 0})

    const changeUrl = (e) => {
        setUrlVideo({index : e.currentTarget.innerText.split("Серія")[1] - 1})
    }

    const changeUrlForward = () => {
        let i = urlVideo.index
        if (i == mass.length - 2) {
            i = mass.length - 2;
            console.log('Вперед не можна')
        } else {
            i = i +1
        }
        setUrlVideo({ index : i })
    }

    const changeUrlBackwards = () => {
        let i = urlVideo.index;
        if (i == 0) {
            i = 0;
            console.log('Назад не можна')
        } else {
            i = i - 1;
        }
        setUrlVideo({ index : i })
    }

    let currentUrl = mass[urlVideo.index];


    return (
        <div className="movie_page d-flex  pt-5">
            <div className="col-1"></div>
            <div className="col-4">
                <h4>{season.title_season}</h4>
                <h6>{season.title_season_eng}</h6>
                <div className="img_block_page">
                    <img className="movie_poster_page" src={items?.image ? require(`../../static/image_movie/${items.image}`) : require('../../static/image_movie/TheShawshankRedemption.jpg')} alt={items.title} />
                </div>
                <div className="description_block">
                    <p>Рік виходу: <span>{season.release_year}</span></p>
                    <p className="description_block_second">Країна: <span>{items.country}</span></p>
                    <p>Жанр: <span>{items.genre}</span></p>
                    <p className="description_block_second">Режисер: <span>{items.director}</span></p>
                    <p>Актори: <span>{items.actors}</span></p>
                    <p className="description_block_second">Мова озвучення: <span className="white">{items.voicing}</span></p>
                </div>
            </div>
            <div className="col-6">
                <div className="description_block_movie">
                    <h5>Про що серіал '{season.title_season}'</h5>
                    <p className="d-flex justify-content-start align-items-start">{season.description}</p>
                </div>
                <div className="player_top d-flex justify-content-between">
                    <div className="first_child d-flex justify-content-start align-items-center">
                        <p>Дивитися онлайн</p>
                        <p>Трейлер</p>
                    </div>
                </div>
                <div className="video_player">
                    <ReactPlayer
                        url={currentUrl}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                    <div className="player_bot"></div>
                </div>
                <div>
                    <div className="d-flex flex-row flex-wrap">
                        {num.map(el => (
                            <div className={urlVideo.index === el ? 'change_nums change_nums_current' : 'change_nums'} onClick={(e) => changeUrl(e)}><p>Серія {el + 1}</p></div>
                        ))}
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="change_buttons" onClick={(e) => changeUrlBackwards(e)}><p>Попередня серія</p></div>
                        <div className="change_buttons" onClick={(e) => changeUrlForward(e)}><p>Наступна серія</p></div>
                    </div>
                </div>
                <div>
                    <h5 className="serial_season_title">Дивитися онлайн всі сезони серіалу "{items.title}":</h5>
                    <div className="serial_season_div d-flex flex-row justify-content-start flex-wrap">
                        {seasons.map(el => (
                            <div className={season_number.index === el - 1 ? 'serial_season_button serial_season_button_current' : 'serial_season_button'} onClick={(e) => change(e)}><p>Сезон {el}</p></div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Items;