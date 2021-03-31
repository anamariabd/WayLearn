import axios from "axios";

const TEACHER_API_BASE_URL = "http://localhost:8080/api/v1/teacher";

class TeacherService {
  createTeacher(teacher: any) {
    return axios.post(TEACHER_API_BASE_URL+"/register", teacher, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  showTeacher() {
    return axios.get(TEACHER_API_BASE_URL + "/gets");
  }
}

export default new TeacherService();
