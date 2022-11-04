import {AppBar, Container, Toolbar, Typography} from "@mui/material"

import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import React from 'react'

function Header() {
  return (
    <AppBar position="sticky">
        <Container maxWidth="lg">
        <Toolbar>
           <Typography component="h1" variant="h5" fontWeight="600" flex={1}>
             سایت مقالات علمی
           </Typography>
        
           <BookmarkAddOutlinedIcon/>
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header