

function SelectFilterCountry({setFilter,setIsOpen}) {
    const options = ['africa', 'america', 'asia', 'europe', 'oceania']

    function selectCountry(countrySelect){
        
        setFilter((country)=>country===countrySelect?"":countrySelect)
        setIsOpen((isOpen)=>!isOpen)
        
    }
    
    return (
        <section className="absolute top-12 w-[163px] rounded-md h-[180px p-3 pl-5 space-y-2 bg-white md:w-full dark:bg-Dark-Blue">

            {
                options.map(country => <p className=" cursor-pointer capitalize dark:bg-Dark-Blue dark:text-white" key={country}
                    onClick={() => selectCountry(country)}
                >{country}</p>)
            }
        </section>
    )
}

export default SelectFilterCountry
