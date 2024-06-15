import React, { useRef } from "react";
import './filter.css';

function Filter ({filter, setFilter}) {

    const selectValueRef = useRef();

    function onChange() {
        const selectValue = selectValueRef.current.value;
        setFilter(selectValue);
    };

    return <>
        <select ref={selectValueRef} onChange={onChange} className="filter-btn filter-arrow" name="time" id="time-select">
            <option value="all">All</option>
            <option value="last_day">Last Day</option>
            <option value="last_week">Last Week</option>
            <option value="last_month">Last Month</option>
            <option value="last_year">Last Year</option>
        </select>
    </>
}

export default Filter;