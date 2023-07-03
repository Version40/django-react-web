import React from 'react';
import Item from "./Item";
import './Allitems.css'

const Items = ({ items, loading }) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    if (items.length > 0)
        return (
            <div>
                <div className="items_movie d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <div className="allitems d-flex justify-content-center align-items-center flex-wrap">
                            {items.map(el => (
                                <Item item={el} key={el.slug} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        );
    else
        return (<p>Надходження відсутні</p>)
};

export default Items;