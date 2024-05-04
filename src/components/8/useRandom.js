import { useState } from "react";

function useRandom (initialValue) {
    const [randomNumber, setRandomNumber] = useState(initialValue);

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newRandomNumber);
    }

    return {
        randomNumber,
        generateRandomNumber,
    };
    
}

export default useRandom;