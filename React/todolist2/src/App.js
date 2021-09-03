import './App.css';
import { useEffect, useRef, useState} from 'react';
import { style } from './elements';
import List from './lists';





function App() {
  const [ inputText,setInputText ] = useState(''); //input 값 감지용

  const input = useRef();
  
  const Onchange = (e) => { //input값 변화 감지용
    setInputText(e.target.value);
  }

  const [ values, setValues]  = useState([
    /* {
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
    } */
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

  const focus = () => {
    input.current.focus();
  }  

  const Delete = (id) => {
  


    console.log('삭제 실행됨.');
    console.log();
    console.log(values)
    
    setValues(values.filter(index => index.id !== id))
  }


  const [count,setcount] = useState(1);
  const showEdit = (id, value) =>{
    console.log("실행됨");
    console.log(edit_style);
    if(count){
      editStyle({display:'flex'});
    }
    else{
      editStyle({display:'none'});
    }
    setcount(!count);
  }

  const [ edit_style,editStyle] = useState({display:'none'});


  const scroll = useRef();

  return (<>
  <style.background>
    <style.edit_modal_background style={edit_style}>
      <style.edit_modal>

      </style.edit_modal>
    </style.edit_modal_background>
    <style.modal>
      <style.input_wrapper>
        <style.input onChange={Onchange} ref={input} onKeyPress={onKeys}/>
        <style.input_button onClick={OnCreate}>config</style.input_button>
      </style.input_wrapper>
      <style.list_ul_wrapper>
        <style.list_ul ref={scroll}>
          <List value={values} onToggle={onToggle} Delete={Delete} onEdit={showEdit}/>
        </style.list_ul>
      </style.list_ul_wrapper>
    </style.modal>
  </style.background>
  </>
  );
}

export default App;
