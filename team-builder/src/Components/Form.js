import React, {useState} from "react";

function Form() {
    const [input, setInput] = useState({name: "", email: "", position: ""})
            console.log("input", input)

            const changeHandler = event => {
                setInput({...input, [event.target.name]: event.target.value})
            }

    return (
        <div>
            <form>
                <input
                placeholder="name"
                name= "name"
                onChange={changeHandler}
                />
                <input
                placeholder="email"
                name= "email"
                onChange={changeHandler}
                />
                <input
                placeholder="position"
                name= "position"
                onChange={changeHandler}
                />
            </form>
        </div>
    )
}

export  default Form