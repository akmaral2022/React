import { useState } from "react"
import './button.css'

export function ButtonSearch({ onClick, title }) {
    return (
        <button {...onClick} className="button" onClick={onClick}>{title}</button>
    )
}