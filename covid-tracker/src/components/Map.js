import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import { useState,useEffect } from 'react';
import axios from "axios";
import mapboxgl from "mapbox-gl";
import { Link }  from "react-router-dom";
import { rainbowColors } from './themes/Styles';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 30,
        longitude: 15,
        zoom: 1,
        width: "100vw",
        height: "40vh",
    });
    const [worldData, setWorldData] = useState();
    const allWorldData = `https://corona-api.com/countries`;

    useEffect(() => {
        axios.get(allWorldData)
        .then((response) => {
          setWorldData(response.data.data)
        })
      }, [allWorldData]);

    const navigationControlStyle = {
        right: 20,
        top: 60,
        zIndex:1,
    }

    const geolocateControlStyle = {
        right: 20,
        top: 20,
        zIndex:1,
    }
    const colors = [`${rainbowColors.red}`, `${rainbowColors.orange}`, `${rainbowColors.yellow}`, `${rainbowColors.green}`, `${rainbowColors.blue}`, `${rainbowColors.purple}`];

	const random_color = colors[Math.floor(Math.random() * colors.length)];
    // worldData&& worldData.map(country => console.log(country.coordinates.latitude))
    return ( 
        <>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle='mapbox://styles/mapbox/dark-v10'>
                <NavigationControl style={navigationControlStyle}/>
                <GeolocateControl style={geolocateControlStyle}
                trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showAccuracyCircle={true}
                //auto
                />
                {worldData?.map((country) =>  country.coordinates.latitude && country.coordinates.longitude ? (<Marker latitude={country?.coordinates?.latitude} longitude={country?.coordinates?.longitude} key={country.code}>
                        <Link to={`/countrypage/${country.code}`}>
                        <div style={{width: "0.5em", height: "0.5em", backgroundColor:random_color, borderRadius:"50%" }}></div>
                        {/* design suggestion <p style={{color:"white"}}>{country.code}</p> */}
                        </Link>
                    </Marker>) : null
                )}
            </ReactMapGL>
        </>
     );
}
 
export default Map;