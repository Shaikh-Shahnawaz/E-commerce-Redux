import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//------- get request ---------

const fetchProductGetRequest = createAsyncThunk(
  "users/fetchProductGetStatus",
  // async (userId, thunkAPI) => {
  async (id) => {
    // axios is here for calling a api
    // if(id)
    // const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = await axios.get(`https://fakestoreapi.com/products`);

    // console.log('thunk data=->',data.data)

    return data.data;
  }
);

// get product by id

const fetchProductById = createAsyncThunk(
  "users/fetchProductById",
  // async (userId, thunkAPI) => {
  async (id) => {
    // axios is here for calling a api
    // if(id)
    const data = await axios.get(`https://fakestoreapi.com/products/${id}`);

    return data.data;
  }
);


export { fetchProductGetRequest, fetchProductById }
