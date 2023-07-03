import React from 'react';
import SearchAll from "./Search_all";

const Search = ({ searchValue, setSearchValue }) => {



    return (
        <div>
            <div>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Введіть слово для пошуку..."/>
                <button >Знайти</button>
            </div>
            <SearchAll searchValue={searchValue} ></SearchAll>
        </div>

    );
};

export default Search;