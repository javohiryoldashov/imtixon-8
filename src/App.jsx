import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './views/home/home';
import Company from './views/company/company';
import Branches from './views/branches/branches'
import Rooms from './views/rooms/rooms';
import Banks from './views/banks/banks'
import LoginAd from './views/LoginAd/LoginAd';
import LoginToken from './Provider/loginToken/LoginToken'
function App() {
 
return (
    <div className="App">
      <LoginToken>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/login' element={<LoginAd />} />
              <Route path="/admin/company" element={<Company />} />
              <Route path="/admin/branches" element={<Branches />} />
              <Route path="/admin/rooms" element={<Rooms />} />
              <Route path="/admin/banks" element={<Banks />} />
            {/* </Route> */}
          </Routes>
      </LoginToken>
    </div>
  );
}

export default App;
