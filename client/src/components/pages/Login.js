import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchData } from "../../main.js";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login", {
      username,
      password
    }, "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data);
          storeInlocalStorage(data);
          navigate("/Profile");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const storeInlocalStorage = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/Profile");
  };

  return (
    <div className="logindetails" id="login">
      <form onSubmit={onSubmit}>
        <div className="logindetails" id="login">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-label"
            id="username"
            name="username"
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="logindetails" id="login">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-label"
            id="password"
            name="password"
            onChange={onChange}
            value={password}
            required
          />
        </div>

        <input type="submit" value="login" />
        <br></br>
        <br></br>
        <input type="checkbox" value="para" />

        <label htmlFor="para">keep me login</label>
        <br></br>
        <br></br>
        <p>
          Don't have an account? Please register here&nbsp;
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;