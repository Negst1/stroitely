import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Services from './components/services/Services';
import CreateService from './components/create-service/CreateService';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='sidebar-wrap'>
        <Sidebar></Sidebar>
      </div>
      <div className='content'>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path='services' element = {<Services></Services>}/>
            <Route path='create-services'element = {<CreateService></CreateService>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
