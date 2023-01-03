import AnotherComponent from "./AnotherComponent";
import Images from "./Images";


function FirstComponent() {
    //comentario
    const name = "Tutu"
    return (
        <div className="firstcomponent">
            {/* comentario */}
            <p>Primeiro component</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent/>
            <Images/>
        </div>
    );
}

export default FirstComponent