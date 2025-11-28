import React,{useContext}from'react';
import{AppBar,Toolbar,Typography,Button}from'@mui/material'; import{useNavigate}from'react-router-dom';
import{AuthContext}from'../context/AuthContext';
export default({mode,toggleTheme})=>{const nav=useNavigate(); const{user,signOut}=useContext(AuthContext);
return <AppBar position='static'><Toolbar><Typography sx={{flex:1,cursor:'pointer'}}onClick={()=>nav('/')}>TaskApp</Typography>
<Button color='inherit'onClick={toggleTheme}>Theme</Button>
{user?<><Typography sx={{mx:2}}>{user.username}</Typography><Button color='inherit'onClick={()=>{signOut();nav('/signin');}}>Logout</Button></>
:<><Button color='inherit'onClick={()=>nav('/signin')}>Sign In</Button><Button color='inherit'onClick={()=>nav('/signup')}>Sign Up</Button></>}
</Toolbar></AppBar>;};
