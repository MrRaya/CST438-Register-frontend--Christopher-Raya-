import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import {SERVER_URL} from '../constants.js'


class Student extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    handleSubmit = () => {
        const token = Cookies.get('XSRF-TOKEN');

        fetch(`${SERVER_URL}/student`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json',
                       'X-XSRF-TOKEN': token }, 
            body: JSON.stringify({name: document.getElementById("name").value, 
            email: document.getElementById("email").value, status_code: document.getElementById("status_code").value})
        })
        .then(res => {
            toast.success("Student Successfully Added", {
                position: toast.POSITION.BOTTOM_LEFT});
            })
            .catch(err => {
              toast.error("Student Add failed", {
                position: toast.POSITION.BOTTOM_LEFT
              });
              console.error(err);
            });
    };

    render() {

        return (
            <div>
                <br/>

                <div class="row">
                    <div class="col">
                        <label for="studName">Enter Student Name:</label>
                        <input name="studName" id="name" type="text" class="form-control" placeholder="Student Name" aria-label="Assignment Name"/>
                    </div>
                        <div class="col">
                        <label for="studEmail">Enter Student Email:</label>
                        <input name="studEmail" id="email" type="input" class="form-control" placeholder="test@csumb.edu" aria-label="Student Email"/>
                    </div>
                        <div class="col">
                        <label for="statCode">Set Code Status</label>
                        <input name="statCode" id="status_code" type="text" class="form-control" placeholder="Status Code" aria-label="Status Code" required/>
                    </div>
                </div>

                <br/>

                <Button id="Submit" variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleSubmit}> Add New Student </Button>
                <ToastContainer autoClose={1500} /> 
                
          </div>
        );
    
    };
}

export default Student;