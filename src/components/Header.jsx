import DarkMode from "../Features/darkmode/DarkMode"
import HeaderText from "./HeaderText"

function Header() {
    return (
        <header className="py-5 box-shadow-bottom bg-white dark:bg-Dark-Blue">
            <div className="container flex justify-between">
                <HeaderText />
                <DarkMode />
            </div>
        </header>
    )
}

export default Header
