export function Todos({todos}){

    return <div>
        {console.log(todos)}
    {todos.map(function(todo) {
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={()=>{
                fetch("http://localhost:3000/completed",{
                    method:"PUT",
                    body:JSON.stringify({
                        id:todo._id
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                   
                })
                .then(async (res)=>{
                    const json=await res.json();
                    alert("Todo updated")
                })

            }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
        </div>
    })}
</div>
}