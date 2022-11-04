import { Grid, Typography } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import {GET_AUTHORS_INFO} from '../../graphql/queries'
import {Link} from "react-router-dom";
import Loader  from '../shared/loader'
import React from 'react'
import {useQuery} from '@apollo/client'

function Authors() {
    // const response=useQuery(GET_AUTHORS_INFO)
    const {loading,data,errors}=useQuery(GET_AUTHORS_INFO)
    if (loading) return <Loader/>
    if (errors) return <h1>ERRORS...</h1>
    console.log("data",data)
    const {authors}=data
  return (
    <Grid container sx={{boxShadow:"rgba(0,0,0,.1) 0px 4px 12px" ,borderRadius:4}}>
        
        {authors.map ((item,index)=>(
            <React.Fragment  key={item.id}>
      <Grid item xs={12} padding={2}>
        {/* <Link
        to={`/authors/${item.slug}`} */}
        <Link to={`/authors/${item.slug}`}
        style={{display: 'flex',textDecoration:"none",alignItems: 'center',color: 'gray'}}
        >
        <Avatar src={item.avatar.url}/>
        <Typography component="p" variant="p" color="text.secondry">
            {item.name}
        </Typography>
        </Link>
      </Grid>
      {
        index != authors.length -1 && (
        <Grid item xs={12}>
            <Divider variant="middle"/>
          </Grid>)
      }

      </React.Fragment>
      ))}
    </Grid>
  )
}

export default Authors
