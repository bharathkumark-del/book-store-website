import { Box, Button } from '@mui/material'
import React from 'react'
import "../components/Book/book.css"
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Button style={{
          color:"white",
          marginTop:"20px"
        }} className='button' LinkComponent={Link} to="/books" >View All Books</Button>

      </Box>
    </div>
  )
}
export default Home