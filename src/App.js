
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from "./component/Sidebar/Sidebar";
import Routes from "./pages/Routes";
import './App.css';
import TopNav from "./component/TopNav/TopNav";
import { useSelector } from 'react-redux';

const App = () => {

    const theme = useSelector(state => state.theme);
      
    return (
        <Router>
           <Route render={(props) => (
               <div className={`app ${theme.mode}`}>
                   <Sidebar {...props} />
                   <div className='app__content'>
                       <TopNav />
                       <div className='app__content-main'>
                           <Routes />
                       </div>
                   </div>
               </div>
           )} />
        </Router>
    );
}

export default App;