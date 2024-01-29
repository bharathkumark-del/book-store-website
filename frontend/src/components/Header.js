import React, { useState } from 'react'
import "../components/Book/book.css"
import { AppBar, Tab, Tabs, Toolbar, Typography, } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
import "./Book/book.css"

export const Header = () => {
    const [value, setValue] = useState()
    return (
        <div className='header'>
    
            <AppBar  position='sticky'>
                <Toolbar>
                    <Typography sx={{alignItems:"center",fontSize:"30px"}} ><LibraryBooksIcon />Book Store</Typography>
                    <Tabs
                    sx={{ml:'auto',color:'white'}}
                        textColor='inherit'
                        indicatorColor='secondary'
                        value={value}
                        onChange={(e, val) => setValue(val)} >
                        <Tab LinkComponent={NavLink} to='/' label='Home' />
                        <Tab LinkComponent={NavLink} to='/add' label='Add Products' />
                        <Tab LinkComponent={NavLink} to='/books' label='Books' />

                        <Tab LinkComponent={NavLink} to='/aboutus' label='About Us' />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}
