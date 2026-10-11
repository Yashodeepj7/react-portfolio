const Foot = () => {
    const currentYear = new Date().getFullYear();
    return(
        <>
        <div className="foot bg-white">
            <p>copyright @{currentYear}</p>
        </div>
        </>
    )
}

export default Foot;