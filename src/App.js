import "./App.css";
import Header from '../src/components/Mealdbcomponents9th/Header/Header'
import Welcomelayout from '../src/components/Mealdbcomponents9th/Welcomelayout/Welcomelayout';
import Foods from '../src/components/Mealdbcomponents9th/Foods/Foods';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Fooddetails from "./components/Mealdbcomponents9th/Fooddetails/Fooddetails";
function App() {
  return(
   <div className="layout-div container-fluid">
     <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Welcomelayout></Welcomelayout>
        </Route>
        <Route exact path="/foods">
            <Foods></Foods>
        </Route>
        <Route exact path="/food/:mealID">
            <Fooddetails></Fooddetails>
        </Route>
      </Switch>
    </Router>
   </div>
  );
}

export default App;


