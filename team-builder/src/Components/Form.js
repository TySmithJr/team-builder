import React, {useState} from "react";

function Form() {
    const [storeData, setStoreData] = useState()


    return (
        <div>
            <form>
                <input
                placeholder="name"
                />
                <input
                placeholder="email"
                />
                <input
                placeholder="position"
                />
            </form>
        </div>
    )
}

export  default Form