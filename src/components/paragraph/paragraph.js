import React from "react"
import './paragraph.css'

const Paragraph = ({ color, text }) => {
    return <p className='text' style={{ color: color }}>{text.toUpperCase()}</p>
}

export default Paragraph