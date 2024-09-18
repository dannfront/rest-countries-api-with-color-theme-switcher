function Spinner({ isHeight = false }) {
    return (
        <div className={`flex justify-center items-center ${isHeight ? 'h-screen' : ""}`}>
            <div className="loader border-Dark-Blue"></div>
        </div>
    )
}

export default Spinner
