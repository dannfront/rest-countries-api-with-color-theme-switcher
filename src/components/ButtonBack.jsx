import { useNavigate } from "react-router-dom"
import ArrowBack from "../icons/ArrowBack"


function ButtonBack() {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)} className="bg-white flex justify-center items-center gap-2 mt-10 rounded-lg w-24 p-1 box-shadow dark:bg-Dark-Blue">
            <ArrowBack className="w-5" fill="" stroke="black" />
            <p className="text-lg dark:text-white ">Back</p>
        </button>
    )
}

export default ButtonBack
