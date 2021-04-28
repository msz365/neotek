
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <Router>
      <Home />
      <MessengerCustomerChat
    pageId="110387191195732"
    appId="52209998919991"
  />
    </Router>
    
  );
}

export default App;
