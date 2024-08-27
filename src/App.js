import styles from './App.module.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import DataAnalysisScreen from './screens/DataAnalysisScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavigationBar/>
        <div className={styles.content}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/data' element={<DataAnalysisScreen />}/>
            <Route path='/login' element={<LoginScreen />}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;