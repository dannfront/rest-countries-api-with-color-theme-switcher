
function BordersCountryName({ bordersCountry }) {
    return (
        <div className="mb-5 text-center grid__info--borders md:mb-0">
            <h2 className="mt-5 font-bold lg:mt-0 dark:text-white">Border Countries</h2>
            <ul className="flex items-center gap-3 mt-5 flex-wrap">
                {bordersCountry.map((country => <li className="text-sm bg-white box-shadow text-center p-2 rounded-md" key={country}>{country}</li>))}
            </ul>
        </div>
    )
}

export default BordersCountryName
