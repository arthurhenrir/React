import { useState, useEffect } from "react";

const Hooks = () => {
    let idade = 30;
    const  [novaIdade, setNotaIdade] = useState(30);

    const changeAge = () => {
        idade++;
    };

    const increaseAgeState = () => {
        setNotaIdade(novaIdade+1);
    };

    const decreaseAgeState = () => {
        setNotaIdade(novaIdade-1);
    };

    useEffect(() => {
        console.log("testando");
    });

    return (
        <div>
            <p>idade: {idade}</p>
            <button onClick={changeAge}>aumentar idade</button>
            <p>idade state: {novaIdade}</p>
            <button onClick={increaseAgeState}>aumentar idade state</button>
            <button onClick={decreaseAgeState}>diminuir idade state</button>
        </div>
    );

};

export default Hooks;