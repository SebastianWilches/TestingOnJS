import PropTypes from 'prop-types'
import { useState } from 'react'

export default function CounterApp({ value }) {

    const [contador, setContador] = useState(value);

    const handleAdd = () => {
        setContador(contador + 1);
    }
    const handleSubstract = () => {
        setContador(contador - 1);
    }
    const handleReset = () => {
        setContador(value);
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{contador}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button aria-label='button-reset' onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 20
}