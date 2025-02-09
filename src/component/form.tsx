export const Form = () =>{
    return(
        <div className="flex justify-center items-center ">
           <div className="flex flex-col justify-center items-start  bg-white rounded-2xl  lg:min-w-md p-10">
            <div>
                <h1 className="text-teal-800 font-bold text-xl ">Formulário de Cadastro</h1>
                <p className="text-gray-500 text-bold text-sm">Cadastre-se gratuitamente</p>
            </div>

            <div className="flex flex-col  my-12 -mb-2 gap-4">
                <div className="flex flex-col  ">
                    <p className="text-gray-600">Nome</p>
                    <input type="text" title="nome" className="border rounded-sm border-gray-300 w-60 lg:w-sm" />
                </div>

                <div className="flex flex-col  ">
                    <p className="text-gray-600">Email</p>
                    <input type="text" title="email" className="border rounded-sm border-gray-300 w-60 lg:w-sm" />
                </div>

                <div className="flex flex-col  ">
                    <p className="text-gray-600">Telefone</p>
                    <input type="text" title="Telefone" className="border rounded-sm border-gray-300 w-60 lg:w-sm" />
                </div>

                <div className="flex flex-col  ">
                    <p className="text-gray-600">Celular</p>
                    <input type="text" title="Celular" className="border rounded-sm border-gray-300 w-60 lg:w-sm" />
                </div>
                <button className="bg-teal-900   text-white cursor-pointer self-end px-6 py-1 rounded-sm hover:bg-teal-600 ">Cadastre-se</button>

            </div>
           </div>
        </div>
    )
}