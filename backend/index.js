const express=require('express');
const { createTodo, updateTodo } = require('./types');
const {todo} =require('./db')
const app=express();
const cors=require("cors")
/*body={
    title: String
    Description: String
}*/
app.use(express.json());
app.use(cors());
app.get('/todos',async(req,res)=>{
    const todos=await todo.find({});
    res.json({todos:todos})
})

app.post('/todo',async(req,res)=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.json({msg:"Wrong inputs"});
    
    return;
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({msg:"Todo has been created"});

})
app.put('/completed',async(req,res)=>{
    const createPayload=req.body;
    const parsePayload=updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.json({msg:"Wrong inputs"});
    
    return;
    }
    await todo.updateOne({_id:req.body.id},{
    completed:true});

    res.json({msg:"Todo has been updated"});
})
app.listen(3000,()=>{
    console.log("Hello")
})
