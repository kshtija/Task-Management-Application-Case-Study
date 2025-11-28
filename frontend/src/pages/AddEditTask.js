import React,{useEffect,useState}from'react';
import{Container,Typography}from'@mui/material'; import{useNavigate,useParams}from'react-router-dom';
import api from'../api/axios'; import TaskForm from'../components/TaskForm';
export default()=>{const{id}=useParams(); const nav=useNavigate(); const[t,ct]=useState(null);
useEffect(()=>{if(id)api.get('/tasks/'+id).then(r=>ct(r.data));},[id]);
return <Container maxWidth='sm'><Typography variant='h5'>{id?'Edit':'Add'} Task</Typography>
<TaskForm initial={t||{}} onSubmit={async v=>{if(id)await api.put('/tasks/'+id,v); else await api.post('/tasks',v); nav('/');}}/>
</Container>;};
