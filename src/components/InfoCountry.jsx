

function InfoCountry({ fieldName = "", info = "" }) {
    return (
        <p className="dark:text-white">
            <span className="font-bold capitalize dark:text-white">{fieldName}</span>
            {info}
        </p>
    )
}

export default InfoCountry
