import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import CreditCard from './pages/CreditCard';
import DarkwebMonitoring from './pages/DarkwebMonitoring';
import Dashboard from './pages/Dashboard.jsx';
import DatabreachScanner from './pages/DatabreachScanner';
import Folders from './pages/Folders';
import PasswordGenerator from './pages/PasswordGenerator';
import PasswordHealth from './pages/PasswordHealth';
import Passwords from './pages/Passwords';
import PersonalInfo from './pages/Personalinfo';
import SecureNotes from './pages/SecureNotes';
import SharedItem from './pages/Shareditem';
import Tools from './pages/Tools';
import Trash from './pages/Trash';
const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/"element={<Dashboard/>}/>
        <Route path="/creditcard"element= {<CreditCard/>}/>
        <Route path="/passwords"element= {<Passwords/>}/>
        <Route path="/personalinfo"element= {<PersonalInfo/>}/>
        <Route path="/securenotes"element= {<SecureNotes/>}/>
        <Route path="/shareditem"element= {<SharedItem/>}/>
        <Route path="/folders"element= {<Folders/>}/>
        <Route path="/tools"element= {<Tools/>}/>
        <Route path="/passwordgenerator"element= {<PasswordGenerator/>}/>
        <Route path="/passwordhealth"element= {<PasswordHealth/>}/>
        <Route path="/databreachscanner"element= {<DatabreachScanner/>}/>
        <Route path="/datawebmonitoring"element= {<DarkwebMonitoring/>}/>
        <Route path="/darkwebmonitoring"element= {<Trash/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;

