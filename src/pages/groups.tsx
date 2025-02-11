import { FacebookIcon, InstagramIcon } from "lucide-react"
import { ButtonPages } from "../component/buttonPages"



export const Groups = () =>{
    return(
        <div className="bg-white min-h-screen">
           
           <nav className="flex flex-col py-6 px-10">
            <ul className="flex justify-between px-10">
                <li className="flex justify-center items-center gap-4">
                    <img className="h-10 w-10 rounded-full" src="https://plus.unsplash.com/premium_vector-1716874671235-95932d850cce?w=352&dpr=1&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="" />
                    <p className="font-light text-xl">LOGO</p>
                </li>
                <li className="flex gap-4">
                <InstagramIcon className=""/>
                <FacebookIcon/>
                </li>
            </ul>
           </nav>

            <div className="flex flex-col items-center mt-10">
                <div className="flex flex-col items-start gap-8">
                    <h1 className="text-3xl font-bold">Write a captivating header here to engage tour customers</h1>
                    <ButtonPages className="bg-lime-600 text-white"/>
                </div>


              
                <div className="w-full h-90 overflow-hidden">
                <img className=" w-full h-full object-cover object-fill" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXBzfGVufDB8MHwwfHx8MA%3D%3D" alt="" />

                </div>
            </div>
        </div>
    )
}