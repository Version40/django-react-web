import React from 'react';
import Item from "./Item";
import './Serials.css'
import MyCarousel from "../../hooks/Carousel/MyCarousel";

const Items = (props) => {
    if (props.items.length > 0)
        return (
            <div className="items_serial d-flex flex-row">
                <div className="col-1"></div>
                <div className="container_block_serial col-10 d-flex justify-content-center">
                    <MyCarousel show={7}>
                        {props.items.map(el => (
                            <Item item={el} key={el.slug} />
                        ))}
                    </MyCarousel>
                </div>
                <div className="col-1"></div>
            </div>
        );
    else
        return (<p>Серіали відсутні</p>)
};

export default Items;