import Item from "./Item"




const ToDo = () => {

    const daten = [
        "eat",
        "sleep",
        "buy groceries",
        "repeat"
        ]

    return (
            <ul>
                <h1>Todo List</h1>
                {daten.map((item,index) => <Item todo={item} key={index}/> )}
            </ul>
    );
}
 
export default ToDo;