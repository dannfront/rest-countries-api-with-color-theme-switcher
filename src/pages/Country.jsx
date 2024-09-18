import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CardDescriptionCountry from "../Features/card-country/CardDescriptionCountry"
import Spinner from "../components/Spinner"




function Country() {
    const [country, setCountry] = useState({})
    const [isPending, setIsPending] = useState(true)
    const { nameCountry } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function getCountry() {
            try {

                const res = await fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
                const data = await res.json()
                if (data.status === 404) return navigate(-1)
                setCountry(data)
                // console.log(data);

            } catch (error) {
                console.log(error);
            } finally {
                setIsPending(false)
            }
        }
        getCountry()
    }, [navigate,nameCountry])

    return (
        <>
            {isPending ? <Spinner isHeight={true}/> : <CardDescriptionCountry data={country} />}
        </>
    )
}

export default Country
