// const Hello = () =>{
//     <p>Hello</p>;





// };
// export default Hello;

//한줄로 사용하는것도 가능함.

import World from "./World"
export default function Hello(){
    return(
    <div> 
       <h1>Hello</h1>
       <World/>
    </div>
    );
}