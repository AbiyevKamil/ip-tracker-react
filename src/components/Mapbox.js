// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getError, selectedLocation, selectedLoding, selectedReject } from '../features/data/dataSlice'

const Mapbox = () => {
    const dispatch = useDispatch()
    const location = useSelector(selectedLocation)
    const isLoading = useSelector(selectedLoding)
    const isRejected = useSelector(selectedReject)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(50);
    const [showLng, setShowLng] = useState(49.7073);
    const [lat, setLat] = useState(40);
    const [showLat, setShowLat] = useState(40.5150);
    const [zoom, setZoom] = useState(9);

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWxhYml5ZXYiLCJhIjoiY2tyYnJtNW5zM3RmejJ1bW5ycjdld2NobSJ9.AaGH2wO7TDzHyp25_Y5RJQ';

    useEffect(() => {
        if (!isLoading) {
            try {
                setLng(location.location.lng.toFixed(4))
                setLat(location.location.lat.toFixed(4))
                setShowLng(location.location.lat.toFixed(4))
                setShowLat(location.location.lat.toFixed(4))
            } catch (exp) {
                dispatch(getError())
            }
        }
    }, [location, isLoading, dispatch])

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('move', () => {
            setShowLng(map.current.getCenter().lng.toFixed(4));
            setShowLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [location, lng, lat, zoom]);

    return (
        <>
            {isLoading ? (<>
                {!isRejected ? (
                    <div className="sidebar">
                        Longitude: {showLng} | Latitude: {showLat} | Zoom: {zoom}
                    </div>
                ) : (<div className="sidebar">
                    IP adress is not valid
                </div>)}
                <div ref={mapContainer} className="map-container mapContainer" />
            </>) : (<>
                {!isRejected ? (
                    <div className="sidebar">
                        Longitude: {showLng} | Latitude: {showLat} | Zoom: {zoom} IP: {location.ip} | ISP: {location.isp} | Location: {location.location.region + " / " + location.location.city}
                    </div>
                ) : (<div className="sidebar">
                    IP adress is not valid
                </div>)}
                <div ref={mapContainer} className="map-container mapContainer" />
            </>)}

        </>
    )
}

export default Mapbox
