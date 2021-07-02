import axios from "axios";
import {CreateGroup} from '../Interfaces'

const GROUP_API_BASE_URL = "http://localhost:8080/api/v1/group";

class CourseService{

  createCourse(Course: CreateGroup) {
    
    return axios.post(GROUP_API_BASE_URL+"/register", Course, {
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

 async getCourses(Id:Number) {
    return await axios.get(GROUP_API_BASE_URL + "/teacher/"+Id, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }

  async getCourseById(id: String) {
    
    return await axios.get(GROUP_API_BASE_URL + "/" + id);

  }

  
  async getStudentsByGroup(id:string) {
    return await axios.get(GROUP_API_BASE_URL + "/student/" + id, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }

}


export default new CourseService();