const Register= () => {

    return (
<div>
                <label for="username"><b>Username</b></label>
                <input type="text" id="username" name="username" placeholder="Enter username"></input>
                

                <br></br>
                <br></br>
                
                <label for="email"><b>Email</b> </label>
                <input type="email" id="email" name="email" placeholder="Enter email"></input>
                <br></br>
                <br></br>
            
                <label for="password"><b>Password</b></label>
                <input type="password" id="pswd" name="password" placeholder="Enter password"></input>
                <br></br>
                <br></br>
                
                <button>register</button>
                <p><b>Already have an account</b><a href="login.html">&nbsp;login</a></p>

                </div>

);
}

export default Register;