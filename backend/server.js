require('dotenv').config();
const express=require('express'); const cors=require('cors');
const connectDB=require('./config/db');
const authRoutes=require('./routes/authRoutes');
const taskRoutes=require('./routes/taskRoutes');
const app=express(); connectDB();
app.use(express.json());
// app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use(cors(
    {
        origin: [
            "http://localhost:3000/",
            "https://willowy-cassata-b5bdeb.netlify.app"
        ]
    }
))
app.get('/',(req,res)=>res.send('Task API running'));
app.use('/api/auth',authRoutes); app.use('/api/tasks',taskRoutes);
app.listen(process.env.PORT||5000,()=>console.log('Server running'));
