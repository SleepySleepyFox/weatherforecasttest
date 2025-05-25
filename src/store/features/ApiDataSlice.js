import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeather",
  async (e) => {
    if (!e) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=${process.env.REACT_APP_API_KEY}`,
      );
      console.log(response);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
);

const initialState = {
  location: null,
  data: null,
};

export const ApiDataSlice = createSlice({
  name: "apiData",
  status: "idle",
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
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setData, setLocation } = ApiDataSlice.actions;
export default ApiDataSlice.reducer;
