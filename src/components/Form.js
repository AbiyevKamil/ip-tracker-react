import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getLocation } from '../features/data/dataSlice'

const Form = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getLocation(query))
    }
    return (
        <form className="my-3">
            <div className="formContainer form-group container d-flex align-items-center w-50">
                <input value={query} onInput={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Search by IP adress" />
                <button onClick={handleSearch} className="btn btn-outline-dark">Search</button>
            </div>
        </form>
    )
}

export default Form
