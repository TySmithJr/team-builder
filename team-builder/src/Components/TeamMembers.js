import React from "react";

const TeamMembers = (props) => {

    return (
        <div>
            <h2>{props.member.name}</h2>
            <h2>{props.member.email}</h2>
            <h2>{props.member.position}</h2>
        </div>
    
    )}
    
export default TeamMembers