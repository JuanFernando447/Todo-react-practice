function ReusableComponent({ title = "Componente reutilizable", description = "Texto por defecto" }) {
    return (
        <>
        <h3>{title}</h3>
        <p>{description}</p>
        <img className="img" src="./public/favicon.svg" alt="imagen reutilizable" width="100px" height="100px" />
        </>
    )
}

export default ReusableComponent