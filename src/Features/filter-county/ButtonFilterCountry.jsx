import { useState } from "react"
import ChevronDown from "../../icons/ChevronDown"
import SelectFilterCountry from "./SelectFilterCountry"



function ButtonFilterCountry({setFilter}) {
    const [isOpen, setIsOpen] = useState(false)

    function listOpen() {
        setIsOpen(!isOpen)
    }

    return (

        <div className="relative">
            <button className="box-shadow flex items-center h-10 p-2 rounded-lg bg-white gap-5 dark:bg-Dark-Blue" onClick={listOpen}>
                <h3 className=" dark:text-white">Filter by Region</h3>

                <ChevronDown className="w-5" fill="white" />
            </button>


           { isOpen && <SelectFilterCountry setFilter={setFilter} setIsOpen={setIsOpen} />}
           
        </div>

    )
}

export default ButtonFilterCountry
