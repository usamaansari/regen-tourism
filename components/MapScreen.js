import React, { useState } from 'react'

import Map, {Marker, Popup, ReactMapGL} from 'react-map-gl'
import { env } from '../next.config'
import { getCenter } from 'geolib'

const MapScreen = ({searchResults}) => {
   
const [selectedLocation, setSelectedLocation] = useState({})
    //Transform the search results object into {lat: , long: } object

    const coordinates = searchResults.map(result => ({
      longitude: result.long,
      latitude: result.lat,
    }))

    console.log(coordinates)
const center = getCenter(coordinates)
//console.log(center)
const [viewport, setViewport] = useState({
  latitude: center.latitude,
  longitude: center.longitude,
  zoom:11
})

  return (
   <Map
   //initialViewState={viewport}
   {...viewport}
   mapStyle='mapbox://styles/usama101/cl9p8s1ui000615qvxhzxhu9r'
   mapboxAccessToken= {process.env.mapbox_key}
   style={{width: '100%', height: '100%'}}
   onViewportChange = {(nextViewport) => setViewport(nextViewport)}
  >
    {searchResults.map(result => (
      <div key={result.long}>
        <Marker 
        longitude={result.long}
        latitude={result.lat}
        offsetLeft = {-20}
        offsetTop = {-10}
        >
          <p onClick={()=>setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce'>📌</p>
        </Marker>
        {/* The popup that should show if we click on a marker */}
        {selectedLocation.long === result.long?(
          <Popup onClose={()=>setSelectedLocation({})} closeOnClick={true} latitude={result.lat} longitude={result.long}>
            {result.title}
          </Popup>
        ):(false)}
        </div>
    ))}

  </Map>
  )
  
  
}

export default MapScreen