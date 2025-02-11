import { Link } from "react-router-dom"

export const Navbar  = () =>{
    return(
        <div className="flex flex-col py-4 bg-gray-200 shadow-2xl font-light text-xl shadow-blue-900 shadow-2xl">
            <ul className="flex justify-around ">
                <li >
                    <Link to='/'>Components</Link>
                </li>
                <li>
                    <Link to='/photos'>Page Photograph</Link>
                </li>
                <li>
                    <Link to='/groups'>Page Groups</Link>
                </li>
            </ul>
        </div>
    )
}

//