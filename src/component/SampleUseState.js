import  {useState} from "react"
import UserName from "./UserName";
export default function SampleUseState({age}){
    const [name , setName] = useState('sanha');
    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";
    // let name = "sanha";

    
//useState를 이용하지 않고 변경
    // function changeName(){
    //     name = name === "sanha" ? "jeongkyun" : "sanha";
    //     console.log(name)
    //    
    //     // id가 name인 값의 tex값을 바꿔줌 document.getElementById("name").innerText=name;
    // }
//useState를 이용하여 변경
        function changeName(){
    
        const newName = name === "sanha" ? "jeongkyun" : "sanha";
        setName(newName);
 
    }
    return( 
    <div>
        {/* //App.js <->  component 값을 넘길 때에는 prps를 사용한다.  */}
        {/* props의 값을 변경하려면 새로운 State 값을 만들어서 관리를 해야한다.  */}
        <h1 id="name">{name}({age}) :{msg}</h1>
        <UserName name={name}/>
        {/* name은 해당 컴포넌트에서는 state이지만 UseName 컴포넌트에서는 props이다.  */}
        <button onClick={changeName}>Change</button>
    </div>
    
    
    );
}
