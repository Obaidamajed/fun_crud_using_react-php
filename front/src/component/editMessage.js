import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';

export default function EditMessage() {


    const navigate =useNavigate();
    const [data,setData] = useState([]);


    const {id} = useParams();

    useEffect(()=>{
        getdata();
    },[])

    const getdata = () => {
        axios.get(`http://localhost:80/REACT/back_end_react/support_backend/read.php/read/${id}`)
        .then((res)=>{
            console.log(res.data);

            setData(res.data);

        })
    }

    const handleChange = (e) =>{

        const name = e.target.name
        const value = e.target.value


        setData(values => ({...values,[name]:value}))






    }
    const handleSubmit = (e) =>{

        e.preventDefault();
                axios.put("http://localhost:80/REACT/back_end_react/support_backend/edit.php/edit",data)
                .then((respone)=>{
                    console.log(respone.data);
                })
                navigate('/contact/view');


                
        

    }


  return (

    <>
        
        <Form onSubmit={handleSubmit} className="container mt-54">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"  name="name" defaultValue={data.name}  onChange={handleChange}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  name="email" placeholder="Enter email" defaultValue={data.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text"  name="subject" placeholder="Enter subject" defaultValue={data.subject} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text"  name="message" placeholder="Enter message" defaultValue={data.message} onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    </>
  )
}
