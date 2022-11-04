import React from 'react'
import {Typography} from '@mui/material'
function Footer() {
  return (
  <footer>
    <Typography 
        component="p"
        variant="p"
        // bgColor="#f2f2f2"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
        >
            مقالات موجود در سایت بدون ذکر منبع پیگیری نمی گردد
    </Typography>
  </footer>
  )
}

export default Footer
