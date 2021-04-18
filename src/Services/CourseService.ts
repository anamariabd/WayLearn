import axios from "axios";
import {CreateGroup} from '../Interfaces'

const USER_API_BASE_URL = "http://localhost:8080/api/v1/group";

class CourseService{

  createCourse(Course: CreateGroup) {
    
    return axios.post(USER_API_BASE_URL+"/register", Course, {
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

 async GetCourses(Id:Number) {
    return await axios.get(USER_API_BASE_URL + "/teacher/"+Id, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }


}


export default new CourseService();