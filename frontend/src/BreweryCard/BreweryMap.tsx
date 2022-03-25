import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = 'AIzaSyCgfz6i9HhNV3yDPgAvny8TqoHu5CQsh_Q';

type MarkerProps = {
    text: string
}

const MarkerComponent: React.FC<MarkerProps> = ({text}) => {
    return <p>{text}</p>
}

type Props = {
    lat: string,
    long: string, 
    name: string
}

const BreweryMap: React.FC<Props> = ({lat, long, name}) => {

   useEffect(() => {
       console.log(lat, long, name);
   },[]);
    

    const Coordinates = {
        center: {
          lat: parseFloat(lat),
          lng: parseFloat(long)
        },
        zoom: 15
      };

    return (
        <div  style={{ height: '35rem', width: '100%' }}>
           <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyCgfz6i9HhNV3yDPgAvny8TqoHu5CQsh_Q'}}
            defaultCenter={Coordinates.center}
            defaultZoom={Coordinates.zoom}
           >
               <MarkerComponent text={name}></MarkerComponent>
           </GoogleMapReact>
     
        </div>
    )
}

export default BreweryMap;