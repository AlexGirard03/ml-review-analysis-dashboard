import {useState} from 'react';
import Button from "./Button";

function App(){

    let [message,setMessage] = useState("");

    async function getMessage(){
        const response = await fetch("/api/");
        const data = await response.json();

        setMessage(data.message);
    }

    return (
        <div>
            <Button callback={getMessage}/>
            <p>{message}</p>
        </div>

    )

}

export default App;