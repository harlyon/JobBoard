import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Jobs from '../components/Jobs'
import Footer from '../components/Footer'
import AddJob from '../Admin/AddJob';
import Login from '../Admin/Login';

const BRoute = () => {
  return (
    <div>
    <Navbar />
      <Route exact path = "/" component={Home} />
      <Route exact path = "/addjob" component={AddJob} />
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/jobs" component={Jobs} />
    <Footer />
    </div>
  );
};

export default BRoute;