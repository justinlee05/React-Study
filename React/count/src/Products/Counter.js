import React,{useState} from 'react';

function Counter(){
    const [number,setNumber] = useState(0);
    //number= 표시할 값 setNumber= number값을 정하는 함수 useState= number 초깃값

    const Plus = () => {
        setNumber(number + 1);
    }
    const Minus = () => {
        setNumber(number - 1)
    }
    //const라서 number++,number-- 못씀

    


    return (
        //리턴값은 무조건 하나. 여러개 하려면 묶어서 하나로 만들어 리턴.
        // <></> 부분은 실제 화면에서 표시되지 않음
        <>
            <h1>{number}</h1>
            <div >
                <button onClick={Plus}>더하기</button>
                <button onClick={Minus}>빼기</button>
                {/* 주석은 이렇게, onClick부분에서 함수를 호출X, 함수 형식의 무언가가 필요 */}
            </div>
        </>
    );
}

export default Counter;