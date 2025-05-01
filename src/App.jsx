import { Route, Routes } from "react-router-dom"
import Navbar from "./layouts/navbar/navbar"
import Journey from './layouts/Journey '
import './index.css'
import Home from "./layouts/Home"
import Category from "./pages/categories/Category"
import Loader from "./components/loader"
import Courses from "./pages/coursees/courses"
import Seperation from "./layouts/seperation"
import Future from "./layouts/feature"
import MainCounter from "./layouts/counter"
import Instractors from "./pages/instractors/instractors"
import { Faq } from "./layouts/Faq"
import Belong from './layouts/belong'
import News from "./pages/blogs/news"
import Footer from "./layouts/footer"
import ScrollToTopButton from "./components/scrollButton"
import WithSpeechBubbles from "./layouts/testemonials"
import CourseDetails from "./pages/coursees/courseDetails"
import { Box } from "@chakra-ui/react"
import Login from "./pages/login/regiester/Login"
import Registration from "./pages/login/regiester/Regiester"
import AllCourses from "./pages/coursees/AllCourses"
import BlogDetails from "./pages/blogs/blogDetails"
import { CourseProvider } from "./pages/coursees/courseContext"
function App() {



  return (
    <div className="app" class={'font-Poppins'}  >
      <Navbar />
      <CourseProvider >
        <Routes >
          <Route path="/" element={<Mian />} />
          <Route path="/spn" element={<Future />} />
          <Route path="/product" element={<Product />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/blog/:blogId" element={<BlogDetails />} />
        </Routes>
      </CourseProvider>
      <Footer />
      {/* <ScrollToTopButton /> */}
    </div>
  )
}

function Mian() {
  return (
    < Box position={'relative'}  >
      <Home />
      <Category />
      <Loader />
      <Future />
      <Courses />
      <Seperation />
      <Instractors />
      <Faq />
      <Journey />
      <WithSpeechBubbles />
      <News />
      {/* <Footer /> */}
      <ScrollToTopButton />
    </Box>
  )
}

export default App

function Product() {
  return (
    <>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
      <h1>Product</h1>
    </>
  )
}
