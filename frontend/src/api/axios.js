import axios from 'axios';
const api=axios.create({baseURL:process.env.REACT_APP_API_URL});
api.interceptors.request.use(c=>{const t=localStorage.getItem('token'); if(t)c.headers.Authorization='Bearer '+t; return c;});
export default api;