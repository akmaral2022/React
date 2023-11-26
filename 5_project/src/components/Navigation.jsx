import { Link } from "react-router-dom"
import './Navigation.css'
export const Navigation = () => {
    return (
        <nav className="Navigation__menu">
            <Link to='/' ><p className="menu">
                Me
            </p>
            </Link>
            <Link to='/portfolio' ><p className="menu">
                Portfolio
            </p>
            </Link>
            <Link to='/contacts' ><p className="menu">
                Contacts
            </p>
            </Link>
            <Link to='/epage' ><p className="menu">
                EPage
            </p>
            </Link>
        </nav>
    )
}