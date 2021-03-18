import React from 'react';
import Header from './Header';
import IndexContent from './IndexContent'
import Navbar from './Navbar'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Index: React.FC= () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <IndexContent/>
    </div>
  );
}

export default Index;