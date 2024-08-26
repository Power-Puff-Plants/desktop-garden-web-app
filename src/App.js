import logo from './logo.svg';
import styles from './App.module.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavigationBar/>
        <div className={styles.content}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;