import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
          {/* <Routes>
            <Route path='/'>
             <HomeScreen/>
            </Route>
          </Routes> */}
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;