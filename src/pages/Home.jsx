import { useEffect, useMemo, useState } from "react"
import Cards from "../Features/card-country/CardsCountry"
import ButtonFilterCountry from "../Features/filter-county/ButtonFilterCountry"
import Search from "../Features/search/Search"

function Home() {


    const [countries, setCountries] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [searchTearm, setSearchTearm] = useState("")
    const [continentilter, setContinentFilter] = useState("")

    const filterCountry = useMemo(() => {

        if (continentilter !== "") {
            return countries.filter((country) => {
                if (country?.continents.at(0).toLowerCase().split(' ').at(1) === continentilter) return country
                return country?.continents.at(0).toLowerCase() === continentilter
            })
        }

        return countries.length > 0 ? countries.filter((country) => country.name.common.toLowerCase().includes(searchTearm)) : []

    }, [countries, searchTearm,continentilter])


    const countryFilterOrData = !filterCountry.length ? countries : filterCountry

    useEffect(function () {

        async function fetchsCountries() {

            try {
                const res = await fetch('https://restcountries.com/v3.1/all')

                const data = await res.json()

                sessionStorage.setItem("countries", JSON.stringify(data))

                setCountries(data)

            } catch (error) {
                console.log(error);

            } finally {

                setIsPending(false)

            }

        }
        if (sessionStorage.getItem("countries")) {
            setIsPending(false)
            return setCountries(JSON.parse(sessionStorage.getItem("countries")))
        }

        fetchsCountries()

    }, [])

    return (
        <>
            <div className="my-5 md:flex md:justify-between md:items-center">
                <Search setSearchTearm={setSearchTearm} />
                <ButtonFilterCountry setFilter={setContinentFilter} />
            </div>

            <Cards countries={countryFilterOrData} isPending={isPending} />
        </>
    )
}

export default Home
