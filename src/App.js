import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
function App() {
  const name = "sanha";
  return (
    <div className="App">
      <Hello/>
      <Welcome/>
    </div>
  );
}

export default App;
