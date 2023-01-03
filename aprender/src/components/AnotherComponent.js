const AnotherComponent = () => {

    const handleClick = () => {
        console.log("teste");
    };

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <br/>
            <button onClick={() => console.log("eita")} >teste</button>
        </div>
    );
};

export default AnotherComponent;