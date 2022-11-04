import {Avatar, Box, Grid, Typography} from '@mui/material'

import {GET_POST_COMMENTS} from '../../graphql/queries'
import React from 'react'
import {useQuery} from '@apollo/client'

function Comments({slug}) {
    const {loading,data,errors}=useQuery(GET_POST_COMMENTS, {variables:{slug}})
   
      if (loading) return null;
     console.log("com",loading)
  return (
    <Grid
    container
    sx={{
        boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius:4,
        mt:8,
        py:1
      }}
        >
              <Grid item xs={12} m={2}>
                  <Typography variant="h6" fontWeight={700} >لیست کامنت</Typography>
                 {data.comments.map((item)=>(
                       <Grid item xs={12} key={item.id} m={2} p={2} border="1px silver solid" borderRadius={1}>
                        <Box component="div" display="flex" alignItems="center">
                         <Avatar >{item.name[0]}</Avatar>
                             <Typography component="span" variant="p" fontWeight={700} mr={1}>{item.name}</Typography>
                        </Box>
                        <Typography component="span" variant="p" mr={1}>{item.text}</Typography>
                         </Grid>
                 ))}
              </Grid>
        </Grid>
      
  )
}

export default Comments