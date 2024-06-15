import React from "react";
import './search.css';
import { useRef } from "react";

function Search ({search, setSearch}) {
    
    const searchRef = useRef()

    /* function onClickSearch (){
        /* const id1 = document.getElementById("id1");
        const valueId1 = id1.value;
        setSearch(valueId1);
        const refValue = searchRef.current.value;
        setSearch(refValue);
    } */


    function onSearch (e){
        const refValue = searchRef.current.value;
        setSearch(refValue);

        /* if (e.key ==='Enter') {
            setSearch(refValue);
        } */
    }
    
    return <>
        <section className="search-nav">
            <input onInput={onSearch} /* onKeyDown={onSearch}*/ ref={searchRef} className="search" type="text" placeholder="Search..." />
            {/* <button onClick={onSearch} className="search-btn"><img src="./img/loupe.png" alt="error" /></button> */}
        </section>
    </>
}

export default Search;