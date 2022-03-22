import './App.css';
import Hello from './component/Hello';
import UseState from './component/SampleUseState';
import Welcome from './component/Welcome';
import SampleUseState from './component/SampleUseState';
function App() {
  const name = "sanha";
  return (
    <div className="App">
      {/* <Hello/> */}
      <h1>props : properties</h1>
      <SampleUseState age={10}/>
      <SampleUseState age={20}/>
      <SampleUseState age={30}/>

    </div>
  );
}

export default App;
     