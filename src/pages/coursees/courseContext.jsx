import { createContext, useState } from "react";


export const CourseContext = createContext();


export function CourseProvider({ children }) {
  const [selectedCourses, setSelectedCourses] = useState(null);

  return (
    <CourseContext.Provider value={{ selectedCourses, setSelectedCourses }}>
      {children}
    </CourseContext.Provider>
  );
}

// 