import { Card } from "./cards";

export function CardList({ marvel }) {
    return (
        <div>
            {marvel.map(movie => {
                return <Card movie={movie.name} key={movie.id} />
            })}
        </div>
    )
}