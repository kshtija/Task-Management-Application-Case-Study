import React,{useContext,useEffect,useState}from'react';
import{Container,Typography,Pagination,Button,Box}from'@mui/material'; import api from'../api/axios';
import TaskList from'../components/TaskList'; import{AuthContext}from'../context/AuthContext'; import{useNavigate}from'react-router-dom';
export default()=>{const{user}=useContext(AuthContext); const[tasks,st]=useState([]); const[p,sp]=useState(1); const[pages,spg]=useState(1); const nav=useNavigate();
const load=async(pg=1)=>{const r=await api.get('/tasks?page='+pg+'&limit=10'); st(r.data.tasks); sp(r.data.page); spg(r.data.pages);};
useEffect(()=>{load();},[]);
return <Container><Box sx={{display:'flex',justifyContent:'space-between',mt:4}}>
<Typography variant='h5'>Your Tasks</Typography><Button variant='contained'onClick={()=>nav('/tasks/new')}>Add</Button></Box>
<TaskList tasks={tasks} onEdit={t=>nav('/tasks/'+t._id+'/edit')} onDelete={async t=>{await api.delete('/tasks/'+t._id); load(p);}} currentUser={user}/>
<Pagination sx={{mt:2}} count={pages} page={p} onChange={(e,v)=>load(v)}/></Container>;};
