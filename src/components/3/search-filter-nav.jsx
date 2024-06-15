import React from "react";
import Search from "../1/search";
import Filter from "../2/filter";
import './search-filter-nav.css'

function SearchFilterNav ({filter, setFilter, search, setSearch}) {


    return <>
        <section className="search-filter-nav">
            <Search search={search} setSearch={setSearch} />
            <Filter  filter={filter} setFilter={setFilter}/>
        </section>
    </>
};

export default SearchFilterNav;