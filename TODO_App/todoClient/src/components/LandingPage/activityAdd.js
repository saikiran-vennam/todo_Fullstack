import { useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";


function TaskAdd() {
    const [activity, setTask] = useState('')
    const navigate = useNavigate();
    var postData = {
        activity : activity
      };
      
      let axiosConfig = {
        headers: {
            'Authorization': localStorage.getItem("token"),
        }
      };
      
      
    const addActivity = () => {
        axios.post('http://localhost:5000/posts', postData, axiosConfig)
      .then((res) => {
        alert("Activity Added");
        navigate('/home')
      })
      .catch((err) => {
        alert("AXIOS ERROR: ", err);
      })

    }
    return (
        <>
            <div className="adding">
                <label for="fname">Acitivity:</label>
                <input type="text" id="fname" name="fname" onChange={(event)=>setTask(event.target.value)}/>
                <Button variant="success" onClick={addActivity}>Add Activity</Button>
            </div>
        </>
    )
}

export default TaskAdd;
