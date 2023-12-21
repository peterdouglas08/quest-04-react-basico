import React from 'react'
import './button.css'

const alertButton = (label) => {
    alert(`A label desse botão é '${label}'`)
}


const Button = ({ label }) => {
    return (
        <>
        <button className='btn' onClick={() => alertButton(label)}>{label}</button>
        </>
    )
}

export default Button