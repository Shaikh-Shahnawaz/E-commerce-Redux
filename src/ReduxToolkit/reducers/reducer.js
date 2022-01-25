import { createSlice } from '@reduxjs/toolkit'

import   {  fetchProductGetRequest, fetchProductById }   from "../thunks/thunk"

const initialState = {
  allProduct:[],
  allSearchProduct:[],
  productById:{},
  cart:[],
  value:0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
      // console.log('reducerProduct==->>',action.payload)
      state.cart.push(action.payload)
    },

    deleteCartItem:(state,action)=>{
      state.cart.splice(action.payload,1)
    },

    searchProduct:(state,action)=>{

      // let search = [...state.allProduct]
      // state.searchProduct = [...state.allProduct]

      state.allProduct = state.allProduct.filter((ele)=>{

        console.log('seacr item-=-=->',action.payload)
        // console.log('batao==>>',ele.title.toLowercase().includes(action.payload))
        // console.log('gegeog===>>',ele.title.toLowercase())
        if(ele.title.toLowerCase().includes(action.payload)){
          return ele.title
        }

        // if(!(ele.title.toLowerCase().includes(action.payload))){
        //   return ele
        // }
        // else{
        //   return ele
        // }

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