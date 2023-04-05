import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



export default function ViewMessage () {


    const [data,setData]= useState([])

    useEffect (()=>{
        getMessage();
    },[])

    const getMessage = () => {

        axios.get("http://localhost:80/REACT/back_end_react/support_backend/read.php/read")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })



    }

    const deleteMessage = (id) => {

        axios.delete(`http://localhost:80/REACT/back_end_react/support_backend/delete.php/${id}`)
        .then((res)=>{

            console.log(res.data);

            getMessage();






        })

       

    }

  return (
    <>
<Table striped bordered hover size="sm" className='container mt-5' style={{textAlign:"center"}}>
      <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>subject</th>
                <th>message</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
      </thead>
      <tbody>

      {data.map((ele,index)=>(

            <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.subject}</td>
                <td>{ele.message}</td>
                <td><a href={`/contact/${ele.id}/edit`}><Button variant="success">Edit</Button></a> </td>
                <td><Button variant="danger" onClick={()=>deleteMessage(ele.id)}>Delete</Button></td>
            </tr>
            ))}
       
       
        
      </tbody>
    </Table>
    

    </>
  )
}
