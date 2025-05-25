import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  data: null,
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
});
export const { setData, setLocation } = ApiDataSlice.actions;
export default ApiDataSlice.reducer;
