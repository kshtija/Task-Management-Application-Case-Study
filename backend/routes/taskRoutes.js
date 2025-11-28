const r=require('express').Router(); const c=require('../controllers/taskController');
const {protect,adminOnly}=require('../middleware/authMiddleware');
r.get('/',protect,c.listTasks); r.post('/',protect,c.createTask);
r.get('/:id',protect,c.getTask); r.put('/:id',protect,c.updateTask);
r.delete('/:id',protect,adminOnly,c.deleteTask); module.exports=r;