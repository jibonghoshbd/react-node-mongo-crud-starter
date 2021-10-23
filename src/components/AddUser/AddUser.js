import { useRef } from "react";



const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handelAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email };
        fetch('http://localhost:5000/users ', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added User')
                }
            })
        nameRef.current.value = '';
        emailRef.current.value = '';
        e.preventDefault();
    }

    return (
        <div>
            <h2>Please Add Users</h2>
            <form onSubmit={handelAddUser}>
                <input ref={nameRef} type="text" name="name" placeholder="Enter Your Name" id="" /> <br />
                <input ref={emailRef} type="email" name="email" placeholder="Enter Your Email" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;