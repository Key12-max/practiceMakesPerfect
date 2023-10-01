import React,{useEffect, useState} from 'react';
import axios from 'axios';
const PersonForm = () => {
    const[message, setMessage ] = useState("Loading...")
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    //handler when the form is submiited
    const onSubmitHandler =(e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {firstName,lastName})
            .then(res=>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))
            .catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br/>
                    <input type= "text" onChange = {(e)=>setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type= "text" onChange = {(e)=>setLastName(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default PersonForm;
