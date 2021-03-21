import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar/Sidebar'

const Home: React.FC= () => {
  return (
    <div>
      <Navbar/>
       <Sidebar/>
    </div>
  );
}

export default Home;