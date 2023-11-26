import './Input.css'

export function Input() {
    return (
        <div className="search">
            <input className='input' placeholder="Search"></input>

            <button className="btn">Advanced Search</button>
        </div>
    )
}