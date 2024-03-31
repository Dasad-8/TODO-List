import React from "react";
import Search from "../1/search";
import Filter from "../2/filter";
import './search-filter-nav.css'

function SearchFilterNav (props) {


    return <>
        <section className="search-filter-nav">
            <Search />
            <Filter />
        </section>
    </>
};

export default SearchFilterNav;