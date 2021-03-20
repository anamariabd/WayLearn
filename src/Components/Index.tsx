import React from 'react';
import Header from './Header';
import IndexContent from './IndexContent'
import Navbar from './Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../index.css';
import Footer from './footer';

const Index: React.FC= () => {
  return (
    <div>
      <Header titulo = "WayLearn"/>
      <Navbar/>
      <IndexContent/>
      <Footer/>
    </div>
  );
}

export default Index;