import { useDarkMode } from "../../contexs/DarkModeContex"
import DarkModeIcon from "../../icons/DarkMode.icon"


function DarkMode() {
    const { dispatch } = useDarkMode()


        function toggleDarkMode() {
            document.querySelector('html').classList.toggle("dark")
            dispatch({ type: "change" })
        }

    return (
        <button className="flex items-center gap-2 md:gap-5" onClick={toggleDarkMode}>
            <DarkModeIcon className=' w-6' fill="white" stroke="black dark:white" />
            <p className=" font-semibold dark:text-white">Dark Mode</p>
        </button>
    )
}

export default DarkMode
