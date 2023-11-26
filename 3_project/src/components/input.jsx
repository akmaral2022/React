import './input.css'
import React, { useState } from "react";

export function Input({ value, setValue }) {
    return (
        <div>
            <input className="input" value={value} onChange={(event => setValue(event.target.value))}></input>
        </div>
    )
}