import { Box, Typography } from '@mui/material'
import React from 'react'

export const AboutUs = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" >
        <Typography sx={{ color: "white", fontFamily: "fantasy" }} variant='h2'>This is a CURD Application</Typography>
        <Typography sx={{ color: "white", fontFamily: "fantasy" }} variant='h3'>By MREN Stack</Typography>
      </Box>
    </div>
  )
}
export default AboutUs