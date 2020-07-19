import React from 'react'

const UsersList = props =>{
   
    return(
        <div style={{ justifyContent: 'center'}}>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Campus</th>
                        <th>Role</th>
                        <th>Linkedin</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map( user => {
                        return (
                            <tr>
                                <td>{ user.firstName }</td>
                                <td>{ user.lastName }</td>
                                <td>{ user.campus }</td>
                                <td> { user.role} </td>
                                <td> { user.linkedin} </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
  
}

export default UsersList;