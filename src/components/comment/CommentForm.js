import 'react-toastify/dist/ReactToastify.css';

import {Avatar, Box, Button, Container, Grid, Typography} from '@mui/material'
import React,{useState}  from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {useMutation, useQuery} from '@apollo/client'

import Loader from '../shared/loader'
import {SEND_COMMENT} from "../../graphql/mutations"
import TextField from '@mui/material/TextField'
import sanitizeHtml from 'sanitize-html'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function CommentForm({slug}) {
    const [name,seTname]=useState("")
    const [email,seTemail]=useState("")
    const [text,seTtext]=useState("")
    const [press,seTpress]=useState(false)
    const [sendComment,{loading,errors,data}]=useMutation(SEND_COMMENT,{variables:{name,email,text,slug}})
    console.log(data)
    const SendHandler=()=>{
        if(name && email && text){
            sendComment()
            seTpress(true)
        }else{
            toast.warn("تمام فیلدها را پر کنید",{position:"top-center"})
        }
    }
    if(data && press ){
        toast.success("کامنت ارسال شد و منتظر تایید میباشد",{position:"top-center"})
        seTpress(false)
    }
  return (
     <Grid
        container
        sx={{
            boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius:4,
            py:1,
            mt:5
           }}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="h6" fontWeight={500} color="primary">فرم ارسال کامنت</Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField label="نام کاربری" variant="outlined" sx={{width:"100%"}} value={name} onChange={(e)=>seTname(e.target.value)}/>
                <TextField label="ایمیل" variant="outlined" sx={{width:"100%"}} multiline minrows={4}  onChange={(e)=>seTemail(e.target.value)}/>
                <TextField label="متن کامنت" variant="outlined" sx={{width:"100%"}} value={text} onChange={(e)=>seTtext(e.target.value)}/> 
            </Grid>
            <Grid item xs={12} m={2}>
                { loading?(  <Button variant="contained" disabled onClick={SendHandler}>در حال ارسال</Button>):
                ( <Button variant="contained" onClick={SendHandler}>ارسال</Button>)
                }
            </Grid>
            <ToastContainer/>
     </Grid>
  )
}

export default CommentForm
