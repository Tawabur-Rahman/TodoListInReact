import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"
export default function Todo(){
let [todos,setTodos]=useState([{task:"First Comment",id:uuidv4(),isDone:false}]);
let [newTodo,setNewTodo]=useState("");
//Add Opperation
let add=()=>{
setTodos((pre)=>{
return([...pre,{task:newTodo,id:uuidv4(),isDone:false}])
})
setNewTodo("")
}
//Track Input
let controlChange=(event)=>{
setNewTodo(event.target.value)
}
//UppercaseAll
let uppercaseAll=()=>{
setTodos(todos.map((pre)=>{
return{
...pre,
task:pre.task.toUpperCase()
}
}))
}
//Delet
let deletTodo=(id)=>{
setTodos(todos.filter((todoId)=>todoId.id !=id))
}
//UpperOne
let upperOne=(id)=>{
setTodos(todos.map((previous)=>{
if(previous.id==id){
return{
...previous,
task:previous.task.toUpperCase()
}
}else{
return previous;
}
}))
}
//Save DBS
let saveDbs=(id)=>{
    setTodos(todos.map((previous)=>{
        if(previous.id==id){
        return{
        ...previous,
        isDone:true,
        }
        }else{
        return previous;
        }
        }))
}


return(<div>
<h3><i>Todo List Here</i></h3>
<hr /><p></p><p></p>
<div className="Add">
<input type="text" placeholder="Enter Anythig To Add" value={newTodo}  onChange={controlChange} /><p></p>
<button onClick={add}>Add</button>
</div>
<div className="List">
<h2>Print All List</h2>
<hr />
</div>
<div className="message">
<ul>
{
todos.map((pre)=>(<li key={pre.id}>

<span style={pre.isDone?{textDecorationLine:"line-through"}:{}} >{pre.task}</span>&nbsp;&nbsp;
<button onClick={()=>deletTodo(pre.id)}>Delet</button>&nbsp;&nbsp;
<button onClick={()=>upperOne(pre.id)}>UpperOne</button>&nbsp;&nbsp;
<button  onClick={()=>saveDbs(pre.id) }>saveDbs</button>
</li>))

}

</ul>

</div>
<button onClick={uppercaseAll} className="b2">Upper-All</button>
</div>)


}