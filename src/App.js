import { useCallback, useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [i, setCounter] = useState(0);

  const onInputChange = useCallback((e) => {
    setInput(e.target.value);
    //console.log(input);
  }, []);

  const onButtonClick = useCallback((e) =>{
    setCounter(i + 1);
    setTodoList([...todoList, {id: i + '', name: input, isDone: false}]);
    setInput("");
  }, [input, todoList, i]);

  const onItemClick = useCallback((id) => {
    setTodoList(oldList => oldList.filter(item => item.id !== id))
  }, []);

  return (
    <div className="App">
      <div className="input-form">
        <form>
          <input className="text-field" 
            type={"text"} 
            name="todo-name" 
            onChange={onInputChange} 
            value={input} 
            placeholder="Add..."/>
          <button className="btn-done" disabled={!input} onClick={onButtonClick}>Done!</button>
        </form>
      </div>
      <TodoList list={todoList} onItemClick={onItemClick}/>
    </div>
  );
}

export default App;
