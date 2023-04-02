import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name: user.name,
        email: user.email,
        telephone:user.telephone,
        password: user.passwordOne,
        role: "publisher",
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email: user.email,
        password: user.password,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const logoutUser = createAsyncThunk("user/logout", async (thunkAPI) => {
  try {
    const res = await axios.post("/api/v1/auth/logout");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});



const initialState = {
  isLoading: false,
  isSucess: false,
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isSucess = false), (state.isLoading = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { data } = payload;
        state.isLoading = false;
        state.user = data.user;
        state.isSucess = true;
        toast.success("Account Created");
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { data } = payload;
        state.user = data.user;
        (state.isSucess = true),
          localStorage.setItem("userName", JSON.stringify(data.user));
        toast.success(`Welcome Back ${state.user}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(logoutUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.user = "";
        (state.isLoading = false), (state.isSucess = true);
        toast.success("Log Out");
        localStorage.removeItem("userName");
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isSucess = false;
        toast.error(payload);
      })
      
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
