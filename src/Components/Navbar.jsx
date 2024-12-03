import { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode, MdOutlineMenu } from "react-icons/md";


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    }

    return (
        <nav className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center text-gray-800 dark:text-white">
                <h1 className="text-2xl font-bold">Blanski</h1>
                <ul className="flex space-x-4 items-center">
                    <li>
                        {
                            darkMode ? (
                                <IoMdSunny size={30} className="hover:cursor-pointer" onClick={() => darkModeHandler()} />
                            ) : (
                                <MdDarkMode size={30} className="hover:cursor-pointer" onClick={() => darkModeHandler()} />
                            )
                        }
                    </li>
                    <li>
                        <MdOutlineMenu size={30} className="hover:cursor-pointer" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}