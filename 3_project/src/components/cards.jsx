import './cards.css'

export function Card({ name }) {
    return (
        <div className="card">{name}</div>
    )
}