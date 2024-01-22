import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return <div>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} style={{padding:10,margin:10}} placeholder="title"></input>
        <br></br><br></br>
        <input onChange={(e)=>{setDescription(e.target.value)}} style={{padding:10,margin:10}} type="text" placeholder="description"></input>
        <br></br><br></br>
        <button  style={{padding:10,margin:10}} onClick={
            ()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description,
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                   
                })
                .then(async (res)=>{
                    const json=await res.json();
                    alert("Todo Added")
                })
            }
        } >Add a Todo</button>
    </div>
}