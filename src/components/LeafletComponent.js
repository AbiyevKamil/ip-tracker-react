// import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
// import mapboxgl from 'mapbox-gl'
// import React, { useEffect, useRef, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getError, selectedLocation, selectedLoding, selectedReject } from '../features/data/dataSlice'

// const LeafletComponent
//     = () => {
//         const dispatch = useDispatch()
//         const location = useSelector(selectedLocation)
//         const isLoading = useSelector(selectedLoding)
//         const isRejected = useSelector(selectedReject)
//         const mapContainer = useRef(null);
//         const map = useRef(null);
//         const [lng, setLng] = useState(50);
//         const [showLng, setShowLng] = useState(50);
//         const [lat, setLat] = useState(40);
//         const [showLat, setShowLat] = useState(40);
//         const [zoom, setZoom] = useState(9);

//         mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWxhYml5ZXYiLCJhIjoiY2tyYnJtNW5zM3RmejJ1bW5ycjdld2NobSJ9.AaGH2wO7TDzHyp25_Y5RJQ';

//         useEffect(() => {
//             if (!isLoading) {
//                 try {
//                     console.log("worked");
//                     setLng(location.location.lng.toFixed(4))
//                     setLat(location.location.lat.toFixed(4))
//                     setShowLat(location.location.lat.toFixed(4))
//                     setShowLng(location.location.lng.toFixed(4))
//                 } catch (exp) {
//                     console.log("error");
//                     dispatch(getError())
//                 }
//             }
//         }, [location, isLoading, dispatch, lat, lng])


//         return (
//             <div className="map-container">
//                 <div className="sidebar">
//                     Longitude: {showLng} | Latitude: {showLat} | Zoom: {zoom}
//                 </div>
//                 <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={true}>
//                     <TileLayer
//                         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
//                     <Marker position={[lat, lng]}>
//                         <Popup>
//                             <span>Location</span>
//                         </Popup>
//                     </Marker>
//                 </MapContainer>
//             </div>
//         )
//     }

// export default LeafletComponent

