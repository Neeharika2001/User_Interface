import {fetchData} from "../../main.js";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const Register= () => {
    const navigate = useNavigate();
    const [user, setUser]= useState({
        username:'',
        password:'',
        email:'',
    });

    const {username,password,email} = user;

    const onChange = (e) => setUser({...user,[e.target.name]:e.target.value})
    const onSubmit =(e) => {
        e.preventDefault();

        fetchData("/user/register",
            {
            username,
            password,
            },
            "POST")
        .then((data) => {
        if(!data.message){
            console.log(data)
            navigate("/Profile")
              
        }
        })
        .catch((error) => {
            console.log(error)
        })

        
    }
    return (
            <div>
                <form onSubmit={onSubmit}>
                    <label for="username"><b>Username</b></label>
                    <input type="text" id="username" name="username" placeholder="username" onChange={onChange} value={username}></input>
                    

                    <br></br>
                    

                    <label for="password"><b>Password</b></label>
                    <input type="password" id="pswd" name="password" placeholder="enter password"onChange={onChange} value={password}></input>
                    <br></br>

                    <label for="email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Email</b> </label>
                    <input type="email" id="email" name="email" placeholder="email"onChange={onChange} value={email}></input>
                    <br></br>
                    
                    <input type="submit" value="Register"></input>
                    <p><b>Already have an account</b><a href="login">&nbsp;login</a></p>
                </form>

</div>

);
}

export default Register;