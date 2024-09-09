import styles from './App.module.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import DataAnalysisScreen from './screens/DataAnalysisScreen';
import LoginScreen from './screens/LoginScreen';
import ProductDetailsScreen from './screens/ProductDetailScreen';
import SignUpScreen from './screens/SignUpScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavigationBar />
        <div className={styles.content}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/data' element={<DataAnalysisScreen />}/>
            <Route path='/product-detail' element={<ProductDetailsScreen />}/>
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/sign-up' element={<SignUpScreen />}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;