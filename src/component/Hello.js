// const Hello = () =>{
//     <p>Hello</p>;





// };
// export default Hello;

//한줄로 사용하는것도 가능함.

import World from "./World"
function showName() {
    console.log("sanha")

}

function showAge(age){
    console.log(age)
}

// function showText(e){
//     console.log(e.target.value)

// }

export default function Hello(){
    return(
    <div> 
       <h1>Hello</h1>
       <button onClick={showName}>Show name</button>
       <button onClick={()=>{showAge(10)

       }}>Show age
       </button> 
       {/* <input type="text" onChange={showText}/> */}
       <input type="text" onChange={(e)=>{
           console.log(e.target.value)
       }}/>
        
    </div>
    );
}