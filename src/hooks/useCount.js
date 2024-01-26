import { useState } from "react"

export const useCount = (initialState, min, max) => {
    const [numero, setNumero] = useState(initialState);

    const incremento = () => {
        if(numero < max) setNumero(numero + 1)
    };

    const decremento = () => {
        if(numero > min) setNumero(numero - 1)
    };

    return {incremento, decremento, numero}
}