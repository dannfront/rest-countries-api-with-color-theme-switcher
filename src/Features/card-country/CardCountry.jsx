import { Link } from "react-router-dom"

function Card({ country }) {
    
    const { name, population, region, capital } = country



    return (
        <Link to={`country/${name.common}`}>
            <article className="w-[290px] min-w-[90%]  mx-auto bg-white rounded-lg pb-5 mb-5 cursor-pointer lg:w-[270px] dark:bg-Dark-Blue">
                <header className="w-full h-[150px] rounded-lg">
                    <img src={country.flags.svg} className="rounded-t-lg w-full h-full object-cover" alt={name.common} />
                </header>
                <main className="container">
                    <h2 className=" font-bold text-lg mt-5 mb-3 dark:text-white">{name.common}</h2>
                    <p className="dark:text-white"><span className="font-semibold">Population:</span> {population.toLocaleString()}</p>
                    <p className="dark:text-white"><span className="font-semibold">Region:</span> {region}</p>
                    <p className="dark:text-white"><span className="font-semibold">Capital:</span> {capital ?? "does not contain capital"}</p>
                </main>
            </article>
        </Link>
    )
}

export default Card
