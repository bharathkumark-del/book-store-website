import React from 'react'
import { Button } from '@mui/material'
import "./book.css"
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

const Book = (props) => {
  const history = useNavigate()
  const { _id, name, description, price, image } = props.book;
  const deleteHandler= async()=>{
   await axios.delete(`http://localhost:5000/books/${_id}`)
   .then(res=>res.data)
   .then(()=>history("/"))
   .then(()=>history("/books"))
  }
  return <div className='card'>
    <img src={image} alt={name} style={{ height: "200px", width: "200px" }} />
    <h2>{name}</h2>
    <p>{description}</p>
    <h3>Rs/{price}</h3>
    <Button className='button ' to={`/books/${_id}`} sx={{color:"white",fontWeight:"600"}} LinkComponent={Link}>Update</Button>
    <Button onClick={deleteHandler}
     className='button'>Delete</Button>
  </div>
}

export default Book