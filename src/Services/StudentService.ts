import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/";
const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/student/";

class StudentService{

  async studentsAlone() {
    return await axios.get(STUDENT_API_BASE_URL + "gets/null");
  }

  addStudent(idCurso:string, student:any) {
    return axios.put(API_BASE_URL + "group/addStudent/" + idCurso, student, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then(
      (e:any) => console.log("Estudiante agregado")
    ).catch(
      (e:any) => console.log("Error")
    );
  }

}

export default new StudentService();