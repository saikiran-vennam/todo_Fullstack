import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [confmPassword, setConfmPassword] = useState(false);
  const [pass, setPass] = useState("");
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleConfmPasswordVisiblity = () => {
    setConfmPassword(confmPassword ? false : true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleChangePass = (event) => {
    setPass(event.target.value);
  };

  const signup = (e) => {
    e.preventDefault();
    if (pass === user.password) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/register`, user)
        .then((res) => {
          console.log(res.data.message.slice(0, 6));
          if (res.data.message.slice(0, 6) === "E11000") {
            alert("Email Already Exists");
          } else {
            alert(res.data.message);
            navigate("/");
          }
        });
    } else {
      alert("Password and Confirm Password doesn't match");
    }
  };

  return (
    <div className="login">
      <div className="formcard">
        <h1> TODO </h1>
        <div className="logintext"> Create New Account </div>
        <form onSubmit={signup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Mail Id"
            value={user.email}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          {passwordShown ? (
            <i className="eye-icon" onClick={togglePasswordVisiblity}>
              {eye}
            </i>
          ) : (
            <i className="eye-icon" onClick={togglePasswordVisiblity}>
              {eyeSlash}
            </i>
          )}
          <br />

          <input
            type={confmPassword ? "text" : "password"}
            name="pass"
            placeholder="Confirm Password"
            value={pass}
            onChange={handleChangePass}
            required
          />
          {confmPassword ? (
            <i className="eye-icon" onClick={toggleConfmPasswordVisiblity}>
              {eye}
            </i>
          ) : (
            <i className="eye-icon" onClick={toggleConfmPasswordVisiblity}>
              {eyeSlash}
            </i>
          )}
          <br />
          <button className="login-btn" type="submit">
            Sign Up
          </button>
        </form>
        <div className="newuser">
          <div className="signrep-register">
            Already have an Account?{" "}
            <span className="signup">
              {" "}
              <a href="/">Sign In </a>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
