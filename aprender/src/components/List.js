const List = () => {

    const items = [
        {
            id: 1,
            name: "Matheus",
        },
        {
            id: 2,
            name: "João",
        },
        {
            id: 3,
            name: "Pedro",
        },
    ]

    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name} - <button>editar</button>
                </p>
            ))}
        </div>
    );

};

export default List;