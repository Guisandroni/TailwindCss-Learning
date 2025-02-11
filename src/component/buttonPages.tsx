
type ButtonPages = {
    className?: string
}

export const ButtonPages: React.FC<ButtonPages> = ({className}) =>{


    return(
        <button className={`${className} border border-solid rounded-2xl w-40 h-12 cursor-pointer hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white`}> Call to action</button>

    )
}

//className="border border-solid rounded-2xl w-40 h-12 cursor-pointer hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"