
import Spinner from "../../components/Spinner"
import Card from "./CardCountry"

function Cards({ isPending, countries }) {


    return (
        <section className={`mt-10 gap-5 ${isPending ? "" : 'md:grid md:grid-cols-2 md:mt-16 lg:grid-cols-3 xl:grid-cols-4'}`}>

            {isPending ? <Spinner />
                :
                countries.map((country, i) => <Card country={country} key={i} />)
            }
        </section>
    )
}

export default Cards
