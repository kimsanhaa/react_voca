import './App.css';
import Hello from './component/Hello';
import UseState from './component/SampleUseState';
import Welcome from './component/Welcome';
import SampleUseState from './component/SampleUseState';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router>
       <Header/>
        <Routes>
          <Route exact path="/" element={<DayList/>} />
          <Route  path="/day/:day" element={<Day/>} />
          <Route path="*"  element={<EmptyPage/>} />
       </Routes>
      </Router>
      </div>
    
  )
}
export default App;
