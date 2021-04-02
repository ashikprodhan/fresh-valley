import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
       {/* <AddProduct></AddProduct>
      <Home></Home> */}
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
       <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            
            
            <PrivateRoute path="/product/:_id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
             <Admin></Admin>
            </PrivateRoute>

          </Switch>
        </Router>
       </UserContext.Provider>
     
     
    </div>
  );
}

export default App;
