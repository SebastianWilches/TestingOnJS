import React from 'react'
import ReactDOM from 'react-dom/client'

import CounterApp from './CounterApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <FirstComponent titulo="Hola, soy el titulo" parrafo="LoremIpsumWea" /> */}
        <CounterApp value={10}></CounterApp>
    </React.StrictMode>
)

