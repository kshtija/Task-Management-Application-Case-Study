import React,{useState}from'react';
import{Box,TextField,Button,MenuItem}from'@mui/material';
export default({initial={},onSubmit})=>{const[t,ct]=useState(initial.title||''),[d,cd]=useState(initial.description||''),[s,cs]=useState(initial.status||'Pending');
return <Box component='form'onSubmit={e=>{e.preventDefault();onSubmit({title:t,description:d,status:s});}}>
<TextField fullWidth label='Title'value={t}onChange={e=>ct(e.target.value)}/>
<TextField fullWidth multiline rows={3} sx={{mt:2}} label='Description'value={d}onChange={e=>cd(e.target.value)}/>
<TextField select sx={{mt:2}} label='Status'value={s}onChange={e=>cs(e.target.value)}>
<MenuItem value='Pending'>Pending</MenuItem><MenuItem value='Completed'>Completed</MenuItem></TextField>
<Button sx={{mt:2}} type='submit' variant='contained'>Save</Button></Box>;};
