import React from 'react';

const NewsItem = (props) => {
    return (
        <div className="news_image_block">
            <div className="news_border_block">
                <img className="eye_news_image" src={require('./eye.png')} alt='eye' />
                <img className="news_image" src={require('../../../static/image_news/' + props.item.image)} alt={props.item.title}  />
                <p className="news_title">{props.item.title}</p>
            </div>
        </div>
    );
};

export default NewsItem;