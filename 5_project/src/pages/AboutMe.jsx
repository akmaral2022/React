import './AboutMe.css'


export const PageAboutMe = () => {
    return (
        <div className="AboutMe">
            <h2>Минбаева Акмарал</h2>
            <div className='Cards'>
                <div className='Personal Card'>
                    <h3>Обо мне</h3>
                    <ul>
                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nemo mollitia enim amet quas maxime dolore vitae id harum eos animi illum ducimus debitis deserunt rem, ratione aliquam suscipit minus.</p></li>
                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nemo mollitia enim amet quas maxime dolore vitae id harum eos animi illum ducimus debitis deserunt rem, ratione aliquam suscipit minus.</p></li>
                        <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nemo mollitia enim amet quas maxime dolore vitae id harum eos animi illum ducimus debitis deserunt rem, ratione aliquam suscipit minus.</p></li>

                    </ul>
                </div>
                <div className="Skils Card">
                    <h3>Навыки</h3>
                    <ul>
                        <li>
                            <p>HTML,CSS, SCSS</p>
                        </li>
                        <li>
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <p>Адаптивная верстка</p>
                        </li>
                        <li>
                            <p>React</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}