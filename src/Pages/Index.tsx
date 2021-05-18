import React from 'react';
import Header from '../Components/Header';
import IndexContent from '../Components/IndexContent'
import Navbar from '../Components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../index.css';
import Footer from '../Components/footer';

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