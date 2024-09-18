import ButtonBack from "../../components/ButtonBack"
import { byAlpha3 } from 'iso-country-codes'
import InfoCountry from "../../components/infoCountry"
import BordersCountryName from "../../components/BorderCountryName"


function CardDescriptionCountry({ data = [] }) {
    const [country] = data
    console.log(country);
    
    const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = country

    const [nameCurrencie] = currencies ? Object.keys(currencies) : []

    const languagesCountry = borders ? Object.values(languages).join(', ') : []
    const bordersCountry = borders ? borders.map(name => byAlpha3[name].name) : []

    return (
        <>
            <ButtonBack />
            <article className={`container mt-14 lg:flex lg:items-center lg:justify-center lg:gap-20 lg:${!bordersCountry.length?'mt-20':'mt-3'}`}>
                <figure className="rounded-lg md:mx-auto md:w-[320px] lg:m-0">
                    <img className="rounded-lg" src={flags.svg} alt="" />
                </figure>

                <section className="mt-5 grid__info lg:w-[400px]">
                    <div className="my-5 md:flex md:flex-col md:gap-5 lg:my-0">
                        <h2 className="font-bold text-xl md:text-2xl dark:text-white">{name.common}</h2>
                        <div className="mt-5 md:mt-0">

                            <InfoCountry fieldName="Poulation: " info={population.toLocaleString()} />
                            <InfoCountry fieldName="region: " info={region} />
                            <InfoCountry fieldName="sub region: " info={subregion} />
                            <InfoCountry fieldName="capital: " info={capital.at(0) ?? "not found"} />
                        </div>
                    </div>

                    <div>
                        <InfoCountry fieldName="Top Level Domain: " info={tld.at(0)} />
                        <InfoCountry fieldName="currencies: " info={currencies[nameCurrencie].name} />
                        <InfoCountry fieldName="Languages: " info={languagesCountry} />
                    </div>

                    {!bordersCountry.length ?"": <BordersCountryName bordersCountry={bordersCountry}/>}

                </section>


            </article>
        </>
    )
}

export default CardDescriptionCountry
