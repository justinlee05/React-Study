import './App.css';
import { useRef, useState} from 'react';
import  styled from 'styled-components';
import { style } from './elements';
import List from './lists';





function App() {
  const [ inputText,setInputText ] = useState(''); //input 값 감지용

  const input = useRef();
  
  const Onchange = (e) => { //input값 변화 감지용
    setInputText(e.target.value);
  }

  const [ values,setValues]  = useState([
    {
      id : 1,
      value : '테스트 1',
      design:undefined
    },
    {
      id : 2,
      value : '테스트 2',
      design:false
    },
    {
      id : 3,
      value : '테스트 3',
      design:false
    }
  ]);
  const nextId = useRef(4);

  const OnCreate = () => {
    if(inputText !== ""){
    setValues([...values,{
      id:nextId.current,
      value:inputText
    }]);
    nextId.current += 1;
    input.current.value = '';
    }
    else{
      alert('뭐야 값 내놔요 ');
    }
    setInputText('');
  }  
  
  const onKeys = (e) => {
    if (e.key === 'Enter')
      OnCreate();
  }

  const onToggle = (id) => {
    setValues(
      values.map(index =>
        index.id === id ? { ...index, design: !index.design } : index
      )
    );


  }


  return (<>
  <style.background>
    <style.modal>
      <style.input_wrapper>
        <style.input onChange={Onchange} ref={input} onKeyPress={onKeys}/>
        <style.input_button onClick={OnCreate}>config</style.input_button>
      </style.input_wrapper>
      <style.list_ul_wrapper>
        <style.list_ul>
          <List value={values} onToggle={onToggle} />
        </style.list_ul>
      </style.list_ul_wrapper>
    </style.modal>
  </style.background>
  </>
  );
}

export default App;
