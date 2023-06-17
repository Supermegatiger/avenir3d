'use client'
import { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents, Popup, CircleMarker, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  const kras = [45.031371, 38.974922];
  const [position, setPosition] = useState({ lat: kras[0], lng: kras[1] })
  const [elements, setElements] = useState([])
  const ZOOM_LEVEL = 13
  const mapRef = useRef()
  const [radius, setRadius] = useState(10)
  const [circlePos, setCirclePos] = useState([position.lat, position.lng])

  return (
    <>
    <input type='range' min={0} max={2000} value={radius} onChange={(ev)=>{setRadius(ev.target.value)}}/>
      <MapContainer className='h-full w-full'  center={position} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle center={circlePos} pathOptions={{color:'red'}} radius={radius}/>
    {elements.map((el)=>
    <Circle key={el[0]} center={[el[0],el[1]]} pathOptions={{color:'red'}} radius={20}/>
    )}
        {location.loaded && !location.error && (
          <Marker
            position={[
              location.coordinates.lat,
              location.coordinates.lng,
            ]}
          ></Marker>
        )}
        <MyComponent circlePos={circlePos} setElements={setElements} setCirclePos={setCirclePos}/>
      </MapContainer>
    </>
  )
}

function MyComponent({setElements, setCirclePos}) {
  const map = useMapEvents({
    click: async(ev) => {
      setCirclePos([ev.latlng.lat, ev.latlng.lng])
      const res = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];area[name="Краснодар"];nwr[shop][name="Магнит"](area);out geom;`).then((response) => response.json()).then((data) => {
        var t = []
        data.elements.forEach(el => {
          if(el.lat){
          t.push([el.lat, el.lon])}
        });
        setElements(t);
      });
    },
    // locationfound: (location) => {
    //   console.log('location found:', location)
    // },
  })
  return null
}

/*

nwr["addr:street"="Красная улица"]["addr:housenumber"="77"]
   ({{bbox}}) -> .office;
nwr[amenity=cafe](around.office:500);
out geom;
*/
