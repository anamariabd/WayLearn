import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/";
const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth/login";

class UserService {
  createUser(user: any, Type:string) {
    return axios.post(USER_API_BASE_URL+Type+"/register", user, {
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  async loginUser(data: any) {
    
    return await axios.post(AUTH_API_BASE_URL, data, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(localStorage.getItem("user"));
      }
      return response.data;
    });
    
  }
  
  getProfile(type:String, id:String) {
    return axios.get(USER_API_BASE_URL+type+"/"+id)
  }

  showUser(Type:string) {
    return axios.get(USER_API_BASE_URL+Type+"/gets")
  }

  logout = () => {
    localStorage.removeItem("user");
  };
  
  getCurrentUser = () => {
    return localStorage.getItem("user");
  };

  
 /*authHeader = () =>{
  const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
    } else {
     return {};
    }  
  } */

}

export default new UserService();
