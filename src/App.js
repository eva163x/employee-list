import './App.css';
import ListEmployeesComponent from './components/ListEmployeesComponent';'./components/ListEmployeesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" Component={ListEmployeesComponent} />
          <Route exact path="/employees" Component={ListEmployeesComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
