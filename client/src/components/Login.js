const Login= () => {

    return (
<div>
<label for="username"><b>Username</b></label>
                <input type="text" id="username" placeholder=" Enter username"></input>
                <br></br>
                <br></br>
            
                
            <label for="pswd"><b>Password</b>
            </label>
                <input type="password" id="pswd" placeholder="Enter password"></input>
                <br></br>
                <br></br>
                <button class="btn-1">login</button>
                <input type="checkbox" value="line"></input>
                <label for="line">keep me loggedin</label>
                <h4><p>Don't have an account register here &nbsp;<a href="register.html" >Register</a>
                </p>
                </h4>




</div>

);
}

export default Login;