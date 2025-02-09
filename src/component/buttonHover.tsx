export const ButtonHover = () =>{
    return(
        <div className="flex justify-center items-center max-w-md ">
            <button className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer text-white font-bold hover:bg-yellow-300 hover:first-letter:text-2xl hover:first-letter:text-red-400 focus:bg-red-700 active:bg-purple-900 hover:text-green-600 disabled:bg-gray-300"> Eu Sou Um Hover</button>
        </div>
    )
}