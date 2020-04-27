import React from 'react';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Review from './component/Review/Review';
import Manage from './component/Manage/Manage';
import NotFound from './component/notFound/NotFound';
import Details from './component/Detail/Details';
import { AuthContextProvider, PrivateRoute } from './component/Login/useAuth';
import Login from './component/Login/Login';
import Shipment from './component/shipment/Shipment';

//import { faMonument } from '@fortawesome/free-solid-svg-icons';






function App(props) {
  //const user = {name: 'tonu', email: 'tonu.com'}

  return (
    
    <div>
      
    <AuthContextProvider>
       <Header></Header>
          <Router>
           <Switch>
             <Route path="/shop" >
              <Shop></Shop>
             </Route>

            <Route path="/review" >
              <Review></Review>
            </Route>

          <Route path="/manage">
            <Manage></Manage>
          </Route>

          <Route path="/login">
            <Login ></Login>
          </Route>

          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>


          
          

          <Route path="/:productKey">
            <Details></Details>
          </Route>

          
          <Route exact path="/">
            <Shop></Shop>
          </Route>

          
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
  
     
    </Router>
    </AuthContextProvider>
     
     
    </div>
    
  );
};

export default App;