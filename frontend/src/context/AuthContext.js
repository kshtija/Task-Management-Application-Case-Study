import React,{createContext,useState,useEffect}from'react';
import api from'../api/axios'; export const AuthContext=createContext();
export const AuthProvider=({children})=>{const[user,setUser]=useState(()=>JSON.parse(localStorage.getItem('user')||'null'));
useEffect(()=>{user?localStorage.setItem('user',JSON.stringify(user)):localStorage.removeItem('user');},[user]);
const signIn=async(u,p)=>{const r=await api.post('/auth/login',{username:u,password:p}); localStorage.setItem('token',r.data.token); setUser(r.data.user);};
const signUp=async(u,p)=>{const r=await api.post('/auth/signup',{username:u,password:p}); localStorage.setItem('token',r.data.token); setUser(r.data.user);};
const signOut=()=>{localStorage.clear(); setUser(null);};
return <AuthContext.Provider value={{user,signIn,signUp,signOut}}>{children}</AuthContext.Provider>;};
