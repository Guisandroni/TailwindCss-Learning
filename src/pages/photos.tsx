import { Facebook, Instagram } from "lucide-react"
import { ButtonPages } from "../component/buttonPages"
import { useEffect, useState } from "react"

export const Photo = () =>{
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
<div className={`min-h-screen p-10 ${tema ==='dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>

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

<div  className="flex items-center justify-center flex-col mt-10">
    <div className="flex items-center justify-center flex-col gap-8">
        <h1 className="font-bold text-4xl">Write a captivating header here to engage your customers</h1>
        <ButtonPages/>    </div>

    <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-3">
        <img className="object-cover  h-full" src="https://images.unsplash.com/photo-1617995469003-af6e42b42a5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5fGVufDB8MXwwfHx8MA%3D%3D" alt="" />
        <img className="object-cover  h-full" src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHwxfDB8fHww" alt="" />
        <img className="object-cover  h-full" src="https://images.unsplash.com/photo-1590071089561-2087ff1fc418?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8MXwwfHx8MA%3D%3D" alt="" />
    </div>

    <div className="flex flex-col items-center mt-20 justify-center gap-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe, libero debitis dolor voluptates incidunt repellat eveniet praesentium necessitatibus. Dolor dolores in perspiciatis ab iste, libero accusantium maiores asperiores ad!</p>
        <ButtonPages/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 mt-40 items-start gap-4 text-start p-20">
        <div className="flex flex-col gap-6 items-center   ">
            <h1 className="font-bold text-3xl ">Write a captivating header here to engage your customers</h1>
            <p className="font-light ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis assumenda iste repellendus vel praesentium obcaecati impedit, itaque corporis ad ipsam rem dicta temporibus officia. Blanditiis placeat consequuntur voluptatum exercitationem.</p>
        
        </div>

        <div className="flex items-center  justify-center md:justify-end ">
            <img src="https://images.unsplash.com/photo-1499417267106-45cebb7187c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8MXwwfHx8MA%3D%3D" alt="" />
        </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-20 gap-6">
        <h1 className="text-3xl font-bold">Engage your customers</h1>
        <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus soluta aliquid modi quam pariatur qui incidunt officia, fuga harum commodi sint fugit, id voluptates fugiat tempore, dicta voluptatibus! Quod, rerum!</p>
        <ButtonPages/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        <img src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D" alt="" />
        <img src="https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D" alt="" />
    </div>
</div>

<section className="flex mt-20 rounded-2xl justify-center text-black py-12 bg-[url(https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D)]">
    <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h1 className="font-bold text-xl md:text-3xl">Engage your customers</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ut sunt! Esse, odit? Alias repellendus nemo esse nisi nobis, nesciunt praesentium temporibus in illum, repudiandae obcaecati eveniet ea deserunt et!</p>
        <ButtonPages/>
    </div>
</section>

<footer className="mt-8">
<nav className="  py-4     font-bold">
    <ul className="flex justify-between items-center">
        <li className="flex items-center  gap-4">
            <img className="w-14 h-14 rounded-full" src="https://images.unsplash.com/photo-1738951617959-342d30dda5d2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p >Logo</p>
        </li>
        <li className="flex gap-8 ">
        <Instagram size={32} color="#000000"  className="bg-white" strokeWidth={2} />
        <Facebook size={32} color="#000000" className="bg-white" strokeWidth={2} />
        </li>
    </ul>
</nav>
</footer>
</div>
    )
}