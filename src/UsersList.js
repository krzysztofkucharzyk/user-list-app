import React from "react";
import './UsersList.css';

function UsersList(props) {

    let usersList = props.usersList;
    // console.log(usersList);

    let usersElements = usersList.map(user => 
        <li key={user.id}>{user.name}<span onClick={() => props.delUser(user.id)
        }>X</span></li>
    );

    

    return (
    <ul className="users-list"> 
        {usersElements}
    </ul>   
    )
}

export default UsersList;