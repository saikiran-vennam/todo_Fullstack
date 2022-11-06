import "./landingPage.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Activities from "./activities";

function LandingPage(props) {
  const [name, setName] = useState("DEFAULT");


  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      setName(localStorage.getItem("name"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    // navigate("/");
    window.location.reload(false);
  };
  return (
    <div className="WholePage">
      <div className="main-div">
        <div className="nameblock"> {name} </div>
      </div>
      <div className="Part2">
        <div className="left">
          <div className="nav1"> To Do List </div>
          <div className="nav2"> History </div>
          <div className="nav3" onClick={logout} > Logout </div>
        </div>
        <div className="right">
          <Link to="/add"> <button >  Add Activity </button></Link>
          <Activities/>
        </div>
      </div> 
    </div>
  );
}

export default LandingPage;
