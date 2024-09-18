import { useDarkMode } from "../contexs/DarkModeContex"



function ArrowBack({className='',fill="",stroke=""}) {

    const { state } = useDarkMode()
    const {darkMode}=state
    console.log(darkMode);
    
    fill = darkMode ? '#fff':'hsl(209, 23%, 22%)'
    stroke = darkMode ? '#000':'#fff'

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`ionicon ${className}`} viewBox="0 0 512 512"><path fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
        </svg>
    )
}

export default ArrowBack
