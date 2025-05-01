import { createContext, useState } from "react";


export const BlogContext = createContext();


export function BlogProvider({ children }) {
  const [selectedBlogs, setSelectedBlogs] = useState(null);

  return (
    <BlogContext.Provider value={{ selectedBlogs, setSelectedBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

// 