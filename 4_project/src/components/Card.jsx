import './Card.css'
import { Button } from './UI/button/Buttons'

export function Card({ name, children }) {
    return (
        <div className="Card">{children}
        </div>
    )
}