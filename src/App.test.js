import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//describe es lo que quiero probar
//it es la prueba en si
describe('Texto', () => {
    //aca adentro agrupo todos los tests que quiero
    describe('text 2', () => {
        it('render without crashing', () => {
            
            const div = document.createElement('div')
            ReactDOM.render(<App />, div)
            ReactDOM.unmountComponentAtNode(div) 
        })
        it('test', () => {
            
        })
    })
    
})