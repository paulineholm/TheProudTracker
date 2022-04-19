import React, {useEffect} from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import OneSignal from "react-onesignal";
import PWAPrompt from 'react-ios-pwa-prompt'
import Home from './components/Home';
import CountryPage from './components/Countrypage';
import Error from './components/Error';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Colorfulrow from './components/Colorfulrow';

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL,
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Colorfulrow />
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="countrypage/:code" element={<CountryPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <PWAPrompt />
    </div>
  );
}

export default App;
