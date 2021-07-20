import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    location: [],
    isLoading: true,
    isRejected: false
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
        getError: (state, action) => {
            state.isRejected = true
        }
    },
    extraReducers: {
        [getLocation.pending]: (state) => {
            state.isLoading = true
        },
        [getLocation.fulfilled]: (state, action) => {
            if (action.payload.code === 422) {
                state.isRejected = true
            } else {
                state.isRejected = false
                state.location = action.payload
            }
            state.isLoading = false
        },
    }
});

export const {
    getError
} = dataSlice.actions
export const selectedLocation = state => state.geoLocation.location
export const selectedLoding = state => state.geoLocation.isLoading
export const selectedReject = state => state.geoLocation.isRejected
export default dataSlice.reducer