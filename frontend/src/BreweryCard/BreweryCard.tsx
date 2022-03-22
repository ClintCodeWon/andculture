import React, { useEffect } from 'react'
import { Brewery } from '../App';

type Props = {
    data: Brewery
}

const BreweryCard: React.FC<Props> = ({data}) => {
    useEffect(() => {
        console.log(`data ${data}`);
    })
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export default BreweryCard;