import './App.css';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Home from './Screens/Home';
import Profile from './Screens/Profile';
import RequestApproval from './Screens/RequestApproval';
import RequestPending from'./Screens/RequestPending';
import RequestPopup from './Screens/RequestPopup';
import Requests from './Screens/Requests';
import Screen1 from './Screens/Login';
import Screen2 from './Screens/Signup';
import Screen3 from './Screens/Forgetpassword';

function App() {
  return (
    <div>
        <center>
        <Router>
        <Routes>
          <Route path='/' element={<Screen1/>} />
            <Route path='/signup' element={<Screen2/>} />
            <Route path='/forgotpassword' element={<Screen3/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/all' element={<Requests/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/pending' element={<RequestPending/>} />
            <Route path='/approved' element={<RequestApproval/>} />
            <Route path='/placed' element={<RequestPopup />} />
        </Routes> 
         </Router>
         </center>
    </div>
  );
}

export default App;
