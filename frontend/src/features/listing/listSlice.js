import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createListing = createAsyncThunk(
  "listing/create",
  async (listing, thunkAPI) => {

    try {
      const res = await axios.post("/api/v1/listing", {
        title: listing.title,
        address: listing.address,
        city: listing.city,
        description: listing.description,
        price: listing.price,
        rooms: listing.rooms,
        bedrooms: listing.bedrooms,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const deleteListing = createAsyncThunk(
  "listing/delete",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const res = axios.delete(`/api/v1/listing/${id}`)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  isLoading: false,
  isSucess: false,
  listing: [],
};

const listSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isSucess = false), (state.isLoading = false);
    },
  },
    extraReducers: (builder) => {
      builder
        .addCase(createListing.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createListing.fulfilled, (state, { payload }) => {
          const { data } = payload;
          state.isLoading = false;
          state.listing.push = data
          state.isSucess = true;
          toast.success('Listing Created');

        })
        .addCase(createListing.rejected, (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        })
        .addCase(deleteListing.pending,(state,{payload}) => {
          state.isLoading = true
        })
        .addCase(deleteListing.fulfilled,(state,{payload})=> {
          
          state.isLoading = false,
          state.isSucess = true,
          state.listing = state.listing.filter(
            (listing) => listing._id !== payload.id
          )
          toast.success('Listing Deleted');

        })
        .addCase(deleteListing.rejected,(state,{payload})=> {
          state.isLoading = false,
          state.isSucess = false,
          toast.error(payload);
        })

    }
});

export const { reset } = listSlice.actions;

export default listSlice.reducer;
