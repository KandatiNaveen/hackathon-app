import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import ChallengeDetailsForm from './components/forms';
import Overview from './components/Hackathon';
import EditForms from "./components/editforms";

export default function Appp(){
    return (
        <Router>
        <Routes>
           <Route path="/" Component={Home} />
           <Route path="/forms" Component={ChallengeDetailsForm}/>
           <Route path="/Hackathon" Component={Overview}/>
           <Route path="/Hackathon/editforms" Component={EditForms}/>
         

           
        </Routes>
       </Router>
    )
}