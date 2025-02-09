
import { Route, Routes } from "react-router-dom"
import { Components } from "./pages/components"
import { Navbar } from "./component/navbar"
import { Photo } from "./pages/photos"



function App() {


  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Components/>} />
      <Route path="photos" element={<Photo/>}/>
    </Routes>
  </div>
  )
}

export default App
