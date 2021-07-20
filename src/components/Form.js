import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory, useLocation } from 'react-router-dom'
import { getLocation } from '../features/data/dataSlice'

const Form = () => {
    // const [selectValue, setSelectValue] = useState('');
    // const history = useHistory()
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    // const search = new URLSearchParams(useLocation());
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getLocation(query))
    }

    // const handleRoute = (e) => {
    //     if (e.target.value === "Leaflet") {
    //         history.push(`/leaflet`)
    //     } else {
    //         history.push(`/`)
    //     }
    // }

    // useEffect(() => {
    //     if (history.location.pathname === "/leaflet") {
    //         setSelectValue("Leaflet")
    //     } else {
    //         setSelectValue("Mapbox")
    //     }
    //     console.log(history.location.pathname)
    // }, [history])

    return (
        <form className="form container my-3">
            <div className="formContainer form-group d-flex align-items-center">
                <input value={query} onInput={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Search by IP adress" />
                <button onClick={handleSearch} type="submit" className="btn">Search</button>
            </div>
            {/* Map Changer will be added later */}
            {/* <div className="mapChanger">
                <div className="inputGroup input-group w-100">
                    <div className="customLabel input-group-prepend w-25">
                        <label className="input-group-text" htmlFor="inputGroupSelectMap">Maps:</label>
                    </div>
                    <select value={selectValue} onInput={(e) => {
                        handleRoute(e);
                        setSelectValue(e.target.value)
                        }} className="customSelect custom-select w-75" id="inputGroupSelectMap">
                        <option defaultValue="Mapbox">Mapbox</option>
                        <option value="Leaflet">Leaflet</option>
                    </select>
                </div>
            </div> */}
        </form>
    )
}

export default Form
