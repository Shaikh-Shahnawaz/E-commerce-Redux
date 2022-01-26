import { createSlice } from '@reduxjs/toolkit'

import   {  fetchProductGetRequest, fetchProductById }   from "../thunks/thunk"

const initialState = {
  allProduct:[],
  allSearchProduct:[],
  productById:{},
  cart:[],
  value:0,
  filterData:[]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
      state.cart.push(action.payload)
    },

    deleteCartItem:(state,action)=>{
      state.cart.splice(action.payload,1)
      // state.cart = state.cart.filter(ele=> ele.id !== action.payload)
    },

    searchProduct:(state,action)=>{
      state.filterData = state.allProduct.filter((ele)=>{       
        if(ele.title.toLowerCase().includes(action.payload)){
          return ele.title
        }
      })
    }

  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProductGetRequest.fulfilled, (state, action) => {
      

      // console.log('actionPayload=-=->>',action.payload)
        state.allProduct = action.payload
    })

    .addCase(fetchProductById.fulfilled, (state,action)=>{
      // console.log('productby id',action.payload)
      state.productById = action.payload


    })
    
  },


})

// Action creators are generated for each case reducer function
export const { addToCart, deleteCartItem, searchProduct } = productSlice.actions

export default productSlice.reducer