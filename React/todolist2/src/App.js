import './App.css';
import { useRef, useState } from 'react';
import { S } from './components/style/elements';
import List from './components/todoItem/lists';





function App() {
  const [ inputText,setInputText ] = useState(''); //input 값 감지용

  const input = useRef();
  
  const Onchange = (e) => { //input값 변화 감지용
    setInputText(e.target.value);
  }

  const [ values, setValues]  = useState([
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


  const Delete = (id) => {
  


    console.log('삭제 실행됨.');
    console.log();
    console.log(values)
    
    setValues(values.filter(index => index.id !== id))
  }


  const [count,setcount] = useState(1);

  const showEdit = (value,id) =>{
    setEditId(id);
    console.log("실행됨");
    if(count){
      editStyle({display:'flex'});
      edit_input.current.value = value;
    }
    else{
      editStyle({display:'none'});
    }
    setcount(!count);
  }
  const [editid,setEditId] = useState();
  const configEdit = (id) =>{
    console.log('수정함수 실행됨');
    setValues(
      values.map(index =>
        index.id === id ? { ...index, value: edit_input.current.value } : index
      )
    
    );
    editStyle({display:'none'});
    setcount(!count);
  }

  const [ edit_style,editStyle] = useState({display:'none'});


  const scroll = useRef();
  const edit_input = useRef();

  return (<>
  <S.Background>
    <S.EditModalBackground style={edit_style}>
      <S.EditModal>
        <S.EditInput ref={edit_input} />
        <S.EditButtonWrapper>
          <S.EditConfig onClick={() => configEdit(editid)}>config</S.EditConfig>
          <S.EditCancel onClick={()=>{editStyle({display:'none'}); edit_input.current.value=''; setcount(!count);}}>cancel</S.EditCancel>
        </S.EditButtonWrapper>
      </S.EditModal>
    </S.EditModalBackground>
    <S.Modal>
      <S.InputWrapper>
        <S.Input onChange={Onchange} ref={input} onKeyPress={onKeys}/>
        <S.InputButton onClick={OnCreate}>config</S.InputButton>
      </S.InputWrapper>
      <S.ListulWrapper>
        <S.Listul ref={scroll}>
          <List value={values} onToggle={onToggle} Delete={Delete} onEdit={showEdit}/>
        </S.Listul>
      </S.ListulWrapper>
    </S.Modal>
  </S.Background>
  </>
  );
}

export default App;
