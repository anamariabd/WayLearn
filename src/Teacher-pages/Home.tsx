import { useHistory} from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import UserService from '../Services/UserService'
import NavbarHome from "./NavbarHome";
import Cursos from "../Student-pages/Cursos";
import Header from "../Components/Header3";
import Grupos from './Grupos'
import Students from './Students'
import Error from '../Pages/Error404'
import Materias from '../Teacher-pages/Materias'
import Materia from '../Student-pages/SingularCourse';
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

interface User {
  
  id: Number,
  username: String,
  roles: String,
  accessToken: String,
  tokenType: String

}

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
            case 'perfil':
              return (<>   <h1 className="subtitle"> <strong> Mi perfil </strong></h1>   
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
