import "./Input.css"
import { useState } from "react"




const Input = () => {
    const [input1,setState1] = useState("");
    const [input2,setState2] = useState("");
    const [input3,setState3] = useState("");
 

    return (  
        <form>
            <div>
                <input className = "vorname" type="text" onChange={(e) => setState1(e.target.value)}/>
                <input className = "nachname" type="text" onChange={(e) => setState2(e.target.value)}/>
                <input className = "email" type="email" onChange={(e) => setState3(e.target.value)}/>
            </div>
            <label htmlFor="vorname">
            Vorname: <p id="vorname">{input1}</p>
            </label> 
            <label htmlFor="nachname">
            Nachname: <p id="nachname">{input2}</p>
            </label> 
            <label htmlFor="email">
            Email: <p id="email">{input3}</p>
            </label> 

        </form>
    );
}
 
export default Input;