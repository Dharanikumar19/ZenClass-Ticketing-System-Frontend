import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/Private-Route/PrivateRoute';
import MentorPrivateRoute from "./components/Private-Route/MentorPrivateRoute"
import Login from './components/Login/Login';
import MentorLogin from "./components/Login/MentorLogin"
import Register from './components/Register/Register';
import PasswordResetPage from './pages/passwordResetPage/passwordResetPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import AddTicket from './pages/CreateNewTicket/AddTicket';
import TicketListPage from './pages/TicketListPage/TicketListPage';
import TicketPage from './pages/TicketPage/TicketPage';
import MentorDashboard from './pages/Dashboard/MentorDashboardPage';
import MentorTicketPage from './pages/TicketPage/MentorTicketPage';
import StudentList from './pages/StudentsList/StudentList';




function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      
        <Route path="/" exact ><Login /></Route>
        <Route path="/mentorLogin" exact ><MentorLogin /></Route>
         <Route path="/register" exact><Register/></Route>
         <Route path="/passwordReset" exact><PasswordResetPage/></Route>
        
      
        <PrivateRoute path="/dashboard" exact><DashboardPage/></PrivateRoute>
        <PrivateRoute path="/add-ticket" exact><AddTicket/></PrivateRoute>
        <PrivateRoute path="/tickets-list" exact><TicketListPage/></PrivateRoute>
        <PrivateRoute path="/ticket/:id" exact><TicketPage /></PrivateRoute>   

        <MentorPrivateRoute path="/mentorDashboard" exact><MentorDashboard /></MentorPrivateRoute>   
        <MentorPrivateRoute path="/mentor-ticket/:id" exact><MentorTicketPage /></MentorPrivateRoute>   
        <MentorPrivateRoute path="/studentsList" exact><StudentList /></MentorPrivateRoute>
      
        </Switch>
    </Router>
    </div>

  );
}

export default App;
