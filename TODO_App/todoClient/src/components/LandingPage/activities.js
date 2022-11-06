import { useState, useEffect } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


const Activities = () => {
    let [taskList, setTaskList] = useState([]);
    let [button, setButton] = useState('start')
    useEffect(() => {
        axios.get('http://localhost:5000/posts', {
            headers: {
                'Authorization': localStorage.getItem("token"),
            }
          }).then((res) => {
          console.log(res.data.posts);
          setTaskList(res.data.posts);
        });
      }, []);

      return (
        <>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Activity</th>
                        <th>Status</th>
                        <th>Time Taken</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList.map(x => 
                            <tr>
                            <td>{x.activity}</td>
                            <td>{x.status}</td>
                            <td>{x.time}</td>
                            <td>{button}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
      )
}

export default Activities;