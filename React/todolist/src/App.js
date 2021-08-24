import './App.css';
import { useRef, useState } from 'react';





function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      value:'할일 1',
      timelimit:'2021-08-30'
    },
    {
      id:2,
      value:'할일 2',
      timelimit:'2021-08-30'
    },
    {
      id:3,
      value:'할일 3',
      timelimit:'2021-08-30'
    }
  ]);






  const createId = useRef(4);
  
  const OnCreate = () => {
    const info = {
      id:createId.current,
      value:inputText
    };
    setTodo([...todo,info])

    createId.current+= 1;

    setText('');

  }


  function Create({onChange, OnCreate}){
    return <>
      <div>
          <div>
            <input onChange={onChange} />
            <button onClick={OnCreate}>확인</button>
          </div>
          <b>{inputText}</b>
        </div>
      
    </>
  
  }





  const [inputText, setText] = useState();

  function Input(){    

    function onChange(e){
        setText(e.target.value);
    }
    return (
        <>
        <Create onChange={onChange} OnCreate={OnCreate}></Create>
        </>
    )
  }




  return (<>
    <Input></Input>
  </>
  );
}

export default App;
