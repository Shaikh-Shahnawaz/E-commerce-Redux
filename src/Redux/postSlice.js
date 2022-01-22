import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// First, create the thunk
export const fetchData = createAsyncThunk(
  'users/fetchByIdStatus',
  async (postData, thunkAPI) => {
    const response = await axios.get('https://fakestoreapi.com/products').then((data)=>{
        return response.data
    })
    
  }
)

// Then, handle actions in your reducers:
const postSlice = createSlice({
  name: 'posts',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

export default postSlice.reducer
