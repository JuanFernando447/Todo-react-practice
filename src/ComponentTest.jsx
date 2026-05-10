function ComponentTest({name, count}) {
    return (
        <>
        <h2> Este es un componente importado por {name} </h2>
        <p>Esta variable de estado contador se usa desde el componente test: {count} </p>
        </>
    )
}

export default ComponentTest