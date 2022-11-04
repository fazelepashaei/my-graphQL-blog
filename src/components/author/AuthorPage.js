import {Avatar, Container, Grid, Typography} from '@mui/material'

import CardEL from '../shared/CardEL'
import {GET_AUTHOR_INFO} from "../../graphql/queries"
import Loader from '../shared/loader'
import React from 'react'
import sanitizeHtml from 'sanitize-html'
import {useParams} from 'react-router-dom'
import {useQuery} from "@apollo/client"

function AuthorPage() {
  const {slug}=useParams()
  const {loading,data,errors}=useQuery(GET_AUTHOR_INFO,{
     variables:{slug:slug}
  })
  if (loading) return <Loader/>
  if (errors) return <h1>ERRORS...</h1>
  console.log("dataAuthor",data)
  //  const {posts}=data.author
    const {feild,name,description,posts,avatar}=data.author
  
  return (
     <Container maxWidth="lg">
        <Grid container mt={10}>
          <Grid item xs={12} display="flex" flexDirection="column" alignItems="center"> 
            <Avatar src={avatar.url} sx={{width:"200px" ,height:"200px"}}/>
            <Typography component="h3" variant="h6" fontWeight={500} mt={4}>{name} </Typography>
            <Typography component="p" variant="h6" color="text.secondry" mt={2}>{feild}</Typography>
          </Grid>
          <Grid></Grid>
          <Grid item xs={12}>
            <div style={{fontSize:"8px"}}
             dangerouslySetInnerHTML={{__html:sanitizeHtml(description.html)}}>
           </div>
          </Grid>
          <Grid item xs={12} mt={6} spacing={2} >
             <Grid>{posts.map((item,index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <CardEL title={item.titlle} slug={item.slug} coverPhoto={item.coverPhoto}  />
              </Grid>  ))}
              </Grid>  
          </Grid>
        </Grid>
     </Container>
  )
}

export default AuthorPage