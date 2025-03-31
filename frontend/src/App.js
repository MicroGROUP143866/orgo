import Nav from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Organ from './pages/organ';
import Hospitals from './pages/hospitals';
import BloodBanks from './pages/bloodBanks';
import HospitalInfo from './pages/hospitalInfo';
import BloodBankInfo from './pages/bloodBankInfo';
import Donor from './pages//donor';
import Reg from './pages/registration';
import Thankyou from './pages/thankyou';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import awareness from './pages/awareness/awareness';

function App() {
  return (
        <Router>
          <Nav></Nav>
          <div class="bgcolor">
            <Route path="/" exact component={Home}/>
            <Route path="/services"  component={Organ}/>
            <Route path="/become-a-donor" component={Donor}/>
            <Route path="/hospitals" component={Hospitals}/>
            <Route path="/hospital-info" component={HospitalInfo}/>
            <Route path="/blood-banks" component={BloodBanks}/>
            <Route path="/bloodbank-info" component={BloodBankInfo}/>
            <Route path="/registration" component={Reg}/>
            <Route path="/thankyou" component={Thankyou}/>
            <Route path="/awareness" component={awareness}/>
          </div>
          <Footer></Footer>
        </Router>
  );
}

export default App;