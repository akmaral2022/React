import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../contex"
import MyButton from "../button/MyButton"

export const NavBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='NavBar'>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className='NavBar__links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'>Посты</Link>
            </div>
        </div>
    )
}