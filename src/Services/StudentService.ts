import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/student/registro";

class StudentService {
  createStudent(student: any) {
    return axios.post(STUDENT_API_BASE_URL, student, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default new StudentService();
