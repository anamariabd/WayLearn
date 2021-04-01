import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Content from './Content'
import Navbar from './NavbarHome'


const Home: React.FC = () => {
  

  return (
    <div>
      <Navbar />
      <Content name="Mis-grupos"/>
    </div>
  );
}

export default Home;