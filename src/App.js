import React, { useEffect, useRef, useState } from 'react';
import { selectedLocation, getLocation } from './features/data/dataSlice';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Form from './components/Form';

function App() {
  const dispatch = useDispatch()
  const location = useSelector(selectedLocation)
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(50);
  const [lat, setLat] = useState(40);
  const [zoom, setZoom] = useState(9);

  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWxhYml5ZXYiLCJhIjoiY2tyYnJtNW5zM3RmejJ1bW5ycjdld2NobSJ9.AaGH2wO7TDzHyp25_Y5RJQ';

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    dispatch(getLocation("8.8.8.8"))
  }, [])

  return (
    <div className="appContainer container-fluid">
      <h1 className="header">IP Tracker</h1>
      <Form />
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container mapContainer" />
      {location.length !== 0 && console.log(location.location.lat)}
      {/* {location.length !== 0 && setLat(location.location.lat.toFixed(4))}
      {location.length !== 0 && setLng(location.location.lng.toFixed(4))} */}
      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://${s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
}

export default App;
