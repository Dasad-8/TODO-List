import { useEffect, useState } from "react";

function useLocalStorage (key, defaultSrc) {
    const [value, setValue] = useState(null);
    
    const setValueWithLocalStorage = (newValue) => {
        setValue(newValue);
        localStorage.setItem (key, JSON.stringify(newValue));
    };

    useEffect(() =>{
        const tasksJson = localStorage.getItem(key);
        if (tasksJson === null) {
            fetch (defaultSrc)
            .then(response => response.json())
            .then(value => {console.log('Received value:', value);
            setValue(value)});
            
        } else {
            setValue (JSON.parse(tasksJson));
        }
    }, [key, defaultSrc]);

    return [value, setValueWithLocalStorage];
};

export default useLocalStorage;