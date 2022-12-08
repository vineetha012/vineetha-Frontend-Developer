import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { LandingPage } from './components/landingPage';
import { SpaceXContextProvider } from './components/context';
import { Banner } from './components/banner';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <SpaceXContextProvider>
     <Routes>
          <Route path='/spacex' element={<LandingPage/>}/>
      </Routes>
     </SpaceXContextProvider>
     </BrowserRouter>
      
      
     
      
    </div>
  );
}

export default App;
