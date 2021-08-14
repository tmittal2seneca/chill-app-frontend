import { React, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import "../css/App.css";

const Dashboard = () => {

    const [user, setUser] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch("https://chill-app-backend.herokuapp.com/user")
            .then(res => res.json())
            .then(data => {
                setUser(data.body)
            })
            .catch(err => console.log(`Error ${err}`));
    }, [])


    return (
        <div className="bg-dark">
            {user.map(userListing => {
                console.log(location.state.emailEntered);
                return userListing.email === location.state.emailEntered &&
                    <div className="form-style-4">
                         <h4>Personal Information</h4><br></br><br></br>
                        <label for="field1">
                            <span>First Name: </span><input disabled="true" value={ userListing.firstName } name="field1" />
                        </label>
                        <label for="field2">
                            <span>Last Name:</span><input disabled="true" value={ userListing.lastName } name="field2"  />
                        </label>
                        <label for="field3">
                            <span>Email:</span><input disabled="true" value={ userListing.email } name="field3" />
                        </label>
                        <label for="field4">
                            <span>Birth date:</span><input disabled="true" value={ userListing.birthDate }></input>
                        </label>
                        <label for="field5">
                            <span>Mobile:</span><input disabled="true" value={ userListing.mobile } ></input>
                        </label>
                        <a href="/">Return to Home</a>
                    </div>
            })}
        </div>
    );
}

export default Dashboard
