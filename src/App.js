import './App.css';
import Rout from './component/routes';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Router>

      <Header/>
      <Rout/>
      

      </Router>
     
    </div>
  );
}

export default App;
