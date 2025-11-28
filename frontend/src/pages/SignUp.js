import React,{useState,useContext}from'react';
import{Container,Box,TextField,Button,Typography}from'@mui/material';
import{useNavigate}from'react-router-dom'; import{AuthContext}from'../context/AuthContext';
export default()=>{const[u,cu]=useState(''),[p,cp]=useState(''),[e,ce]=useState('');
const{signUp}=useContext(AuthContext); const nav=useNavigate();
return <Container maxWidth='xs'><Box sx={{mt:6}}>
<Typography variant='h5'>Sign Up</Typography>
<form onSubmit={async ev=>{ev.preventDefault(); try{await signUp(u,p); nav('/');}catch(x){ce('Failed');}}}>
<TextField fullWidth label='Username'margin='normal'value={u}onChange={v=>cu(v.target.value)}/>
<TextField fullWidth label='Password'type='password'margin='normal'value={p}onChange={v=>cp(v.target.value)}/>
{e&&<Typography color='error'>{e}</Typography>}<Button type='submit'variant='contained'fullWidth sx={{mt:2}}>Sign Up</Button>
</form></Box></Container>;};
