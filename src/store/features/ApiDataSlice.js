import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeather",
  async (e, { rejectWithValue }) => {
    if (!e) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=${process.env.REACT_APP_API_KEY}`,
      );
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(true);
    }
  },
);

const initialState = {
  location: null,
  data: null,
  status: "idle",
  error: false,
};

export const ApiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
        state.error = false;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || true;
        state.data = null;
      });
  },
});
export const { setData, setLocation } = ApiDataSlice.actions;
export default ApiDataSlice.reducer;
