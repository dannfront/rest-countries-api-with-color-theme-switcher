import { useDarkMode } from "../contexs/DarkModeContex"

function ChevronDown({ className = "", fill = 'currentColor', stroke = "currentColor" }) {
    const { state } = useDarkMode()

    const { darkMode } = state

    stroke = darkMode ? '#000' : '#fff'
    fill = darkMode ? '#fff' : 'hsl(209, 23%, 22%)'

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`ionicon ${className}`} viewBox="0 0 512 512"><path fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144" /></svg>
    )
}

export default ChevronDown
