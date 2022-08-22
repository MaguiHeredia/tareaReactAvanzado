import React, {useState} from 'react'

const useCounter = () => {
    const [contador, setContador] = useState(0)
    const suma = () => {
        const result = contador + 1
        if(result < 30) { 
        setContador(contador + 1)
        }
        else {
            alert('Superó el número máximo')
        } 
    }
    const resta = () => {
        const result = contador - 1
        if(result > -30) { 
        setContador(contador - 1)
        }
        else {
            alert('Superó el número mínimo')
        } 
    }
    const reset = () => {
        setContador(0)
    }
    return {contador, setContador, suma, resta, reset}
}
export default useCounter