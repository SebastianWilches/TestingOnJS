import PropTypes from 'prop-types'

export const FirstComponent = ({ titulo, parrafo, suma }) => {
    return (
        <>
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
            <p>{suma + 30}</p>
        </>
    )
}

FirstComponent.propTypes = {
    titulo: PropTypes.string.isRequired, //El titulo tiene que ser un String requerido
    parrafo: PropTypes.string, //El parrafo tiene que ser String
    suma: PropTypes.number
}

FirstComponent.defaultProps = {
    titulo: "No hay titulo",
    parrafo: "No hay información de parrafo",
    suma: 1000
}