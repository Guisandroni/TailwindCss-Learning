export const Depoimento = () =>{
    return(
        <div className="flex justify-center items-center md:text-left text-start  ">

            <div className="flex justify-center items-start max-w-sm  bg-white p-10 rounded-2xl flex-col-reverse md:flex-col">
                <h1 className="font-bold text-2xl text-gray-700">"O Tailwindcss mudou <br/> minha vida"</h1>
                <p className="mt-6 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cumque asperiores obcaecati sint ducimus illum ex temporibus laborum voluptatibus enim molestias fuga, libero vitae ea delectus itaque nam porro voluptatum?</p>

                <div className="flex gap-4 mt-4 items-center ">
                    <img className=" size-14 object-cover rounded-full" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww" alt="" />
                    <div className="text-gray-600">
                        <h1 className="font-bold text-gray-900">Dingo Cestari</h1>
                        <p>CEO na Doggo Academy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}