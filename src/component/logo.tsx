import { Facebook, Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export const Logo = () =>{
      const [tema,setNewTema]= useState('light')
    
        const handleClickDark = () =>{
            const newTema = tema === 'light' ? 'dark' : 'light'
            setNewTema(newTema)
            document.documentElement.classList.toggle('dark', newTema === 'dark')
        }
    
        useEffect( ()=>{
            document.documentElement.classList.toggle('dark',tema === 'dark')
        }, [tema])
        
    return(
        <nav className="  py-4   font-bold">
    <ul className="flex  justify-between items-center">
        <li className="flex items-center gap-4">
            <img className="w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1738951617959-342d30dda5d2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <button className="cursor-pointer  rounded-md " onClick={()=>handleClickDark()}><p className="font-light text-2xl ">LOGO</p></button>
        </li>
        <li className="flex gap-8 ">
        <Instagram size={32} color="#000000"  className="bg-white" strokeWidth={2} />
        <Facebook size={32} color="#000000" className="bg-white" strokeWidth={2} />
        </li>
    </ul>
</nav>
    )
}