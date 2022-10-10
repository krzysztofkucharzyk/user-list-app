import React from "react";
import './UsersList.css';

function UsersList(props) {

    let usersList = props.usersList;
    // console.log(usersList);

    let usersElements = usersList.map(user => 
        <li>{user}<span>X</span></li>
    );

    

    return (
    <ul className="users-list"> 
        {usersElements}
    </ul>   
    )
}

export default UsersList;