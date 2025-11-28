import React,{useMemo,useState}from'react';
import{BrowserRouter,Routes,Route}from'react-router-dom';
import{ThemeProvider,CssBaseline}from'@mui/material'; import{getTheme}from'./theme/theme';
import SignIn from'./pages/SignIn'; import SignUp from'./pages/SignUp'; import Dashboard from'./pages/Dashboard';
import AddEditTask from'./pages/AddEditTask'; import ProtectedRoute from'./components/ProtectedRoute';
import Navbar from'./components/Navbar';
export default()=>{const[mode,setMode]=useState('light'); const theme=useMemo(()=>getTheme(mode),[mode]);
return <ThemeProvider theme={theme}><CssBaseline/><BrowserRouter><Navbar mode={mode} toggleTheme={()=>setMode(mode==='light'?'dark':'light')} />
<Routes><Route path='/signin'element={<SignIn/>}/><Route path='/signup'element={<SignUp/>}/>
<Route path='/'element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
<Route path='/tasks/new'element={<ProtectedRoute><AddEditTask/></ProtectedRoute>}/>
<Route path='/tasks/:id/edit'element={<ProtectedRoute><AddEditTask/></ProtectedRoute>}/></Routes></BrowserRouter></ThemeProvider>;};
