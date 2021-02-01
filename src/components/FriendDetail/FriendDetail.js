import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const [select , setSelect] = useState({});
    const {id} = useParams();
    useEffect(()=>{
                        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                        .then(res => res.json())
                        .then(data=>setSelect(data))
    },[]);
    const  friendStyle = {
        border : '1px solid green',
        margin : '20px',
        padding: '20px',
        borderRadius : '20px'
}
    return (
        <div style={friendStyle}>
                <h2>Name : {select.name}</h2>
                <p>Email : {select.email}</p>
                <p>Phone : {select.phone}</p>
                <p>Website : {select.website}</p>
        </div>
    );
};

export default FriendDetail;