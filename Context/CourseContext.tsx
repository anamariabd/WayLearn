import { createContext } from "react"

type GlobalContent = {
  selectedCourse: any
}

const CourseContext = createContext<GlobalContent>({
  selectedCourse: null,
})

export default CourseContext;

//export const useGlobalContext = () => useContext(CourseContext);