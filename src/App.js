import './App.css';
import Hello from './component/Hello';
import UseState from './component/SampleUseState';
import Welcome from './component/Welcome';
import SampleUseState from './component/SampleUseState';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
// function App() {
//   const name = "sanha";
//   return (
//     <div className="App">
//       {/* <Hello/> */}
//       <h1>props : properties</h1>
//       <SampleUseState age={10}/>
//       <SampleUseState age={20}/>
//       <SampleUseState age={30}/>

//     </div>
//   );
// }


 function App() {
   return<div className='App'>
     <Header/>
     <DayList/>
     <Day/>
   </div>
 }
export default App;
     