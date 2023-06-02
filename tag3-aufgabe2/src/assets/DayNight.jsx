import "./DayNight.css"
import { useState } from "react";

const DayNight = () => {
    const [istTag,setTag] = useState(true)
    return (  
        <main className={istTag ? "tag" : "nacht"}>
            <h1>ES IST {istTag? "TAG ☀️":"NACHT 🌑"}</h1>
            <button onClick={() => setTag(!istTag)}>WECHSEL ZU {istTag?"TAG":"NACHT"}</button>
        </main>
    );
}
 
export default DayNight;