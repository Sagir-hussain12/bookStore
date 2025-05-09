import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

export default function App() {
    const [authUser, setAuthUser] = useAuth()
    console.log(authUser);
  return (
   <div>
<div  className="dark:bg-slate-900 dark:text-white">

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/course" element={authUser? <Courses /> : <Navigate to="/signup"/>} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
  <Toaster/>
</div>
   </div>
  )
}