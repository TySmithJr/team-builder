import React, { useState} from "react";
import TeamMembers from "./TeamMembers";


const ListOfPlayers = (props) => {
    console.log(props)

    return(

        <div>
            {props.members.map((member, i) => {
             return <TeamMembers member={member} i={i}  />
            }
            
            )}

        </div>
        

    

    )
}

export default ListOfPlayers