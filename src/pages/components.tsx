import { Buttons } from "../component/buttons"
import Card from "../component/card"
import { Depoimento } from "../component/depoimento"
import { ButtonHover } from "../component/buttonHover"
import { Form } from "../component/form"

export const Components = () =>{
    return(
        <div className="min-h-screen flex  items-center flex-col p-10 bg-gray-100">
      <h1 className="font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-blue-800 text-transparent bg-clip-text via-orange-400 to-indigo-500">Learning TailwindCss</h1>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-xl sm:text-2xl bg-gradient-to-l from-blue-800 text-transparent bg-clip-text   via-orange-400 to-indigo-500">Projects from Frontend-Mentor</h1>
        
        <div className="mt-10 w-full px-4 sm:px-6 md:px-10">

          <div className=" mt-10 grid grid-cols-1 gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

            <Card />
            <Buttons />
            <Form />
            <Depoimento />
            <ButtonHover />



          </div>
        </div>
      </div>
    </div >
    )
}