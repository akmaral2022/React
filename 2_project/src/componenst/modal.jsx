import { useState } from 'react'
import './modal.css'
export function Modal() {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [show1, setShow1] = useState('')
    const [show2, setShow2] = useState('')

    return (
        <div className="modal">
            <div className="modal__conteiner">
                <div className="inputs">
                    <input type="text" className="firstName" placeholder="First name" onChange={(event => setFirst(event.target.value))} />
                    <input type="text" className="lastName" placeholder="Last name" onChange={event => setLast(event.target.value)} />
                </div>
                <p>Первое имя: {show1}</p>
                <p>Второе имя: {show2}</p>
                <button className="submit" onClick={() => {
                    setShow1(first)
                    setShow2(last)
                }}>Submit</button>
            </div>

        </div >
    )
}

