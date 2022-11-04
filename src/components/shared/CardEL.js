import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import {Link} from "react-router-dom";
import React from 'react'
import { Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
function CardEL({title,coverPhoto,slug,author}) {
    console.log({title,coverPhoto,slug,author})
  return (
  <Card sx={{boxShadow:"rgba(0,0,0,.1) 0px 4px 12px" ,borderRadius:4}}>
    {author && (
        <CardHeader 
        avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}}/>}
        title={<Typography component='p' color='text.secondary' fontSize={12}>{author.name}</Typography>}
     />
    )}
  
    <CardMedia
        sx={{borderRadius:4}}
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
    />
    <CardContent>
      {/* <h5>{title}</h5> */}
      <Typography component="h3" variant="h6" color='text.primary'>{title}</Typography>
      </CardContent>
        <Divider variant="middle" sx={{margin:"10px"}}/>
      <CardActions>
        <Link to={`/blogs/${slug}`}style={{textdecoration: 'none',width:"100%"}}>
          <Button variant="outlined" size="small" sx={{width:"100%" ,borderRadius:3}}>
              بیشتر
          </Button>
      </Link>
    </CardActions>
  </Card>
  )
}

export default CardEL