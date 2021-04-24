import { useHistory} from 'react-router-dom'
import "mdbreact/dist/css/mdb.css";
import UserService from '../Services/UserService'
import Cursos from "../Student-pages/Cursos";
import Materia from '../Student-pages/SingularCourse';
import Header from "../Components/Header3";

import MiPerfil from '../Components/MiPerfil'
import Grupos from '../Teacher-pages/Grupos'
import Students from '../Teacher-pages/Students'
import Materias from '../Teacher-pages/Materias'
import NavbarHome from "../Teacher-pages/NavbarHome";
import Student from '../Teacher-pages/Student'

import Error from './Error404'
import {User} from '../Interfaces'
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const Home = () => {
  const { name } = useParams<{ name: string }>();
  const { id } = useParams<{ id: string }>();
  let userCurrent = UserService.getCurrentUser();
  let user: User;
  let history = useHistory();
  let TypeUser;

  if (userCurrent != null){
    user = JSON.parse(userCurrent);
    TypeUser = user.roles;
  } else {
    history.replace("/");
  }

  console.log(name)
  let selected = name;
  return (
    <> 
      {TypeUser === "teacher" && (
        <div>
          <NavbarHome />
          {
        (() => {
          switch (selected) {
            case 'grupos':
              return (<Grupos />)
            case 'grupo':
              return(<> 
                <h1 className="subtitle"> <strong> Grupo {id} </strong></h1>
                <Students/>
              </>)
            case 'lecciones':
              return (<div>   <h1 className="subtitle"> <strong> Lecciones </strong></h1> </div>)
            case 'student':
              return (<Student/>);
            case 'perfil':
              return (<>  
                     <MiPerfil/>
              </>);
              case 'materias':
                return (<div>   <h1 className="subtitle"> <strong> Materias </strong></h1>  <Materias/> </div>);
            default:
             return (
             <Error/>
            )
          }
        })()}
        </div>
      )}

      {TypeUser === "student" && (
        <Container fluid>
          <Header />
          {
            (() => {
          switch (selected) {
            case 'materias':
              return (<Cursos/>)
            case 'materia':
              return (<Materia tipo={id}></Materia>)
            case 'perfil':
              return( <MiPerfil/> )
            default:
             return (
             <Error/>
            )
          }
        })()}
        </Container>
      )}
    </>
  );
};

export default Home;
