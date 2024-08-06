import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeesComponent />} />
          <Route path="/employees" element={<ListEmployeesComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
