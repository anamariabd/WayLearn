import { useHistory} from 'react-router-dom'
import UserService from '../Services/UserService'
import Cursos from "../Student-pages/Cursos";
import Materia from '../Student-pages/SingularCourse';
import Header from "../Components/NavbarHome";
import Footer from "../Components/Footer"
import MiPerfil from '../Components/MiPerfil'
import Grupos from '../Teacher-pages/Grupos'
import Students from '../Teacher-pages/Students'
import Materias from '../Teacher-pages/Materias'
import NavbarHome from "../Teacher-pages/NavbarHome";
import Student from '../Teacher-pages/Student'
import Lessons from "../Teacher-pages/Lesson/Lessons"
import Create from "../Teacher-pages/Lesson/CreateLesson"

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

  let selected = name;
  return (
    <> 
      {TypeUser === "teacher" && (
        <>

          <NavbarHome />

          {
        (() => {
          switch (selected) {
            case 'grupos':
              return (<Grupos />)
            case 'grupo':
              return(<> 
                <Students/>
              </>)
            case 'lecciones':
              return ( <Lessons/> )
            case 'student':
              return (<Student/>);
            case 'perfil':
              return (<>  
                <MiPerfil role={TypeUser} name="Docente"/>
              </>);
              case 'materias':
              return (<>   <h1 className="subtitle"> <strong> Materias </strong></h1>  <Materias /> </>);
            case 'create':
              return(<Create/>)
            default:
             return (
             <Error/>
            )
          }
            })()}
          
        </>
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
              return( <MiPerfil role={TypeUser} name="Estudiante"/> )
            default:
             return (
             <Error/>
            )
          }
            })()}
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Home;
