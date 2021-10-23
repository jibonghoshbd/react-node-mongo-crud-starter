import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h2> Update User {user.name}</h2>
            <p>{id}</p>
        </div>
    );
};

export default UpdateUser;