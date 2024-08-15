import React from "react";
import './search.css';
import { useRef } from "react";

function Search ({search, setSearch}) {
    
    const searchRef = useRef()


    function onSearch (e){
        const refValue = searchRef.current.value;
        setSearch(refValue);
    }
    
    return <>
        <section className="search-nav">
            <input onInput={onSearch} ref={searchRef} className="search" type="text" placeholder="Search..." />
        </section>
    </>
}

export default Search;