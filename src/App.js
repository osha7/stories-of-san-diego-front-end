import './css/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {NavBar} from './components/navbar/NavBar';
import {About} from './components/about/About';
import {Admin} from './components/admin/Admin';
import {AdminDashboard} from './components/admin/AdminDashboard';
import {Contact} from './components/contact/Contact';
import {Home} from './components/home/Home';
import {Stories} from './components/storiespage/Stories';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar" >
          <NavBar />
          </div>
          <Route exact path='/' component={Home} />
          <Route exact path='/stories' component={Stories} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin-dashboard' component={AdminDashboard} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
