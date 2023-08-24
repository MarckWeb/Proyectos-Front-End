import React, { useState } from 'react'

const useCounter = (initialValues) => {

    const [count, setCount] = useState(initialValues)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }

    }

    return {
        count,
        increment,
        decrement
    }
}

export default useCounter