import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import CounterApp from './CounterApp'
import {FirstComponent} from './FirstComponent'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <FirstComponent titulo="Hola, soy el titulo" parrafo="LoremIpsum" /> */}
        <CounterApp value={10}></CounterApp>
    </React.StrictMode>
)

