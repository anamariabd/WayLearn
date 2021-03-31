import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/student";

class StudentService {
  
  showStudents() {
    return axios.get(STUDENT_API_BASE_URL+"/gets");
  }

  
  createStudent(student: any) {
    return axios.post(STUDENT_API_BASE_URL+"/register", student, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }
  
}

export default new StudentService();
