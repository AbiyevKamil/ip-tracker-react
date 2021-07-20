import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    location: []
}

export const getLocation = createAsyncThunk("geoLocation/getLocation", async (ipAdress) => {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_8CDOgK6kXxbdVlqldd574kLW0YdA9&ipAddress=${ipAdress}`)
    const data = response.json()
    console.log(data)
    return data;
})


const dataSlice = createSlice({
    name: "geoLocation",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getLocation.pending]: () => {

        },
        [getLocation.fulfilled]: (state, action) => {
            state.location = action.payload
        }
    }
});

export const {

} = dataSlice.actions
export const selectedLocation = state => state.geoLocation.location
export default dataSlice.reducer