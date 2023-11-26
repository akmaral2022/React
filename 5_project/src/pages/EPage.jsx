import './EPage.css'
import { useNavigate } from "react-router-dom";
export const PageE = () => {
    const navigate = useNavigate();

    return (
        <div className='EPage'>
            <div className='EPage_block'>
                <h1>404</h1>
                <p>Page not found</p>
                <button onClick={() => navigate('/')}>Вернуться на главную</button>
            </div>
        </div>
    )
}