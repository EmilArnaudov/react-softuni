import { useState } from "react";

export default function TextInput(props) {
    let [value, setValue] = useState('as');

    return (
        <>
        <form onSubmit={props.onClickHandlerAddItem}>
            <input onChange={(e) => {setValue(e.target.value)}} type="text"/>
            <button type="submit" >ClickMe</button>
        </form>
        
        </>
    );
}