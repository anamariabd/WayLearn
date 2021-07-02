import React, { useReducer, createContext } from 'react'
import Grupos from "../Teacher-pages/Grupos"
import Students from "../Teacher-pages/Students"
import CourseReducer from "./CourseReducer"
import CourseContext from "./CourseContext"
//   export const useGlobalContext = () => useContext(CourseContext);

const CourseState = (props:any) => {
  const initialState = {
    selectedCourse: null,
  };

  const [state, dispatch] = useReducer(CourseReducer, initialState);

  const getCourse = (id: string) => {
    
    dispatch({ type: "GET_USERS", payload: id });
    console.log(id);
  }

  return (
    <CourseContext.Provider
      value={{
        selectedCourse: state.selectedCourse
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
