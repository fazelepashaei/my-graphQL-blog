import {Avatar, Box, Container, Grid, Typography} from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentForm from '../comment/CommentForm'
import Comments from '../comment/comments'
import {GET_POST_INFO} from '../../graphql/queries'
import Loader from '../shared/loader'
import React from 'react'
import sanitizeHtml from 'sanitize-html'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'

function BlogPage() {
  const {slug}=useParams ()
  const {loading,data,errors}=useQuery(GET_POST_INFO,{
    variables:{slug},
  })
  const navigate=useNavigate()
  if (loading) return <Loader/>
  if (errors) return <h4>errors ...</h4>;
  console.log(data)
  return (
   <Container maxWidth="lg">
    <Grid container spacing={2}>
      <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
         <Typography component="h4" variant="h5" color="secondary" fontWeight={700}>{data.post.title}</Typography>
         <ArrowBackIcon onClick={()=>navigate(-1)}/>
      </Grid>
      <Grid  item xs={12} mt={6}>
       <img src={data.post.coverPhoto.url} alt={data.post.slug} width="100%" style={{borderRadius:15}}
       />
      </Grid>
      <Grid item xs={12} mt={7} display="flex" alignItems="center">
         <Avatar src={data.post.author.avatar.url} alt={data.post.author.avatar.url} sx={{width:80,height:80,marginLeft:2}}/>
         <Box component="div">
              <Typography component="p" variant="h5" fontWeight={500}>{data.post.author.name}</Typography>
              <Typography component="p" variant="h6" color="text.secondry" fontSize={12} >{data.post.author.feild}</Typography>
         </Box>
   
      </Grid>
      <Grid item xs={12} mt={5}>
        <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}} >

        </div>
      </Grid>
      <Grid item xs={12}>
        <CommentForm slug={slug}/>
      </Grid>
      <Grid item xs={12}>
        <Comments slug={slug}/>
      </Grid>
    </Grid>
   </Container>
  )
}

export default BlogPage