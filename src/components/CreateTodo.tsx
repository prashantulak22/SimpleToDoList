interface Props{
    postData: (e:React.FormEvent) => void;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todo:string;
}
const CreateTodo:React.FC<Props> = ({postData, setTodo, todo}) => {
   
    return (
        <div>
            <form onSubmit={postData}>
                <input  required type="text" placeholder="Enter a task"  value= {todo} className="inputField" onChange={(e) => setTodo(e.target.value)}/>
                <button className="addBtn"  type="submit" >Add</button>
            </form>
        </div>
    )
}

export default CreateTodo;
