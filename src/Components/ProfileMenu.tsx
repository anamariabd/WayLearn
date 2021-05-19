import {
  Row,
  Col,
  Dropdown
} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import UserService from "../Services/UserService"
import { PersonCircle} from "react-bootstrap-icons";

const ProfileMenu = () => {
  
  let history = useHistory();  
  return (
    <Row className="lg">
    <Col>
      <Dropdown>
        <Dropdown.Toggle id="profile">
          <PersonCircle color="white" size={38} />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true} id="profile-menu">
          <Dropdown.Item href="#/action-1">Mi perfil</Dropdown.Item>
          <Dropdown.Item onClick={() => { UserService.logout(); history.replace("/") }}>Cerrar sesión</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  </Row>
  );
}

export default ProfileMenu;