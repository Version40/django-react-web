import React from 'react';
import NewsItem from "./News_item";


const NewsItems = ({ items }) => {
    return (
        <div className="d-flex flex-column">
            {items.map(el => (
                <NewsItem item={el} key={el.slug} />
            ))}
        </div>
    );
};

export default NewsItems;