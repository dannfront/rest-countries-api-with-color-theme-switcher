
function Search({setSearchTearm}) {

    function x(e){
        setSearchTearm(e.target.value.toLowerCase())
    }
    return (
        <form className="py-3 md:grow">
            <input className="box-shadow search-icon w-full rounded-md py-5 pl-20 md:w-[50%] lg:w-[40%]" type="text" placeholder="Search for a country…" onChange={(e)=>x(e)}/>
        </form>
    )
}

export default Search
