import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import Projects from './components/Projects/Projects';
import Departments from './components/Departments/Departments';




function App() {
  return (
    <div className="App">
      <Home/>
      <Departments/>
      <Employees/>
      <Projects/>
 
    </div>
  );
}

export default App;
