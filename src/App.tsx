
import { Route, Routes } from "react-router-dom"
import { Components } from "./pages/components"
import { Navbar } from "./component/navbar"
import { Photo } from "./pages/photos"
import { Groups } from "./pages/groups"



function App() {


  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Components/>} />
      <Route path="photos" element={<Photo/>}/>
      <Route path="groups" element={<Groups/>}/>
    </Routes>
  </div>
  )
}

export default App
