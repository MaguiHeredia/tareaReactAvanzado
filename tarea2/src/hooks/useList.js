import React, {useState} from "react";

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue)

    const push = (element) => {
        setValue([...value, element])
    }

    const remove = (index) => {
        setValue(value.filter((e, i) =>  i !== index))
    }

    const isEmpty = () =>  value.length === 0 

    const reset = () => {
        setValue([])
    }

    const sort = () => {
        const ordenados = value.sort()
        console.log(ordenados)
        setValue([...ordenados])
    }

    const reverse = () => {
        const result = []
        for (let i = value.length -1; i >= 0; i--) {
               result.push(value[i])
        }
        console.log('resultt', result)
        setValue([...result])
    }
    return {value, setValue, push, remove, isEmpty, reset, sort, reverse}
}

export default useList;