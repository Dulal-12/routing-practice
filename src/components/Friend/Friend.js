import React from 'react';
import {Link, useHistory} from 'react-router-dom';
const Friend = ({friend}) => {
    const {name , id , email} = friend;
    const history = useHistory();
    const  friendStyle = {
                             border : '1px solid green',
                             margin : '20px',
                             padding: '20px',
                             borderRadius : '20px'
    }
   const handleRoute = (id) =>{
       history.push('/about/'+id)
   }
    return (
        <div style={friendStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Id : <Link to = {"/about/"+id}>Show detail of {id}</Link></p>
             <button onClick = {()=> handleRoute(id)}>Click me for more Detail</button>


         </div>
    );
};

export default Friend;