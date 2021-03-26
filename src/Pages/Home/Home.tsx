import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Navbar from '../../Single-components/Navbar/NavbarHome'
import Content from '../../Single-components/Content'
import { useParams } from 'react-router';

const Home: React.FC = () => {
  
  const { name } = useParams<{ name: string; }>();
  return (
    <div>
      <Navbar />
      <Content name="Mis-grupos"/>
    </div>
  );
}

export default Home;